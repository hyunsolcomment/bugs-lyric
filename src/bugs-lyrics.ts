import axios from 'axios';
import * as cheerio from 'cheerio';

export class BugsLyrics {
    private static async getTrackList(songName: string) {
        try {
            const searchUrl = `https://music.bugs.co.kr/search/integrated?q=${encodeURIComponent(songName)}`;
            const searchResponse = await axios.get(searchUrl);
            const $ = cheerio.load(searchResponse.data);
            const trackId = $("table.trackList > tbody > tr:first-child").attr('trackid');
            
            if (!trackId) {
                throw new Error('트랙 ID를 찾을 수 없습니다.');
            }
    
            return trackId;
        } catch (error) {
            console.error('노래 검색 중 오류가 발생했어요:', error);
        }
    };
    
    private static async getLyrics(trackId: string) {
        try {
            const trackUrl = `https://music.bugs.co.kr/track/${trackId}`;
            const trackResponse = await axios.get(trackUrl);
            const $ = cheerio.load(trackResponse.data);
            const lyrics = $('.lyricsContainer > xmp').html()?.split('\n');
            
            if (!lyrics) {
                throw new Error('가사를 찾을 수 없습니다.');
            }
    
            return lyrics;
        } catch (error) {
            console.error('가사를 불러오던 중 오류가 발생했어요:', error);
        }
    }

    static async getLyrcis(songName: string) {
        const trackId = await BugsLyrics.getTrackList(songName);
    
        if (trackId) {
            const lyrics = await BugsLyrics.getLyrics(trackId);
            
            if (lyrics) {
                return lyrics.join('\n');
            }
        }
    };

}
