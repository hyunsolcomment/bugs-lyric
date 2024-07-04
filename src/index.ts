import { BugsLyrics } from "./bugs-lyrics";

BugsLyrics.getLyrcis("다정히 내 이름을 부르면").then(result => {
    console.log(result);
})