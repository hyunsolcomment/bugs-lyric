# Bugs Lyrics

노래 제목으로 노래의 가사(벅스 기준)를 반환하는 클래스입니다.

## 설치법

```bash
git clone https://github.com/hyunsolcomment/bugs-lyrics.git
cd bugs-lyrics
npm install
```

## 사용법 예시

```
const lyrics = await BugsLyrics.getLyrics("다정히 내 이름을 부르면");

console.log(lyrics);

// 혹은 

BugsLyrics.getLyrics("다정히 내 이름을 부르면").then(lyrics => {
  console.log(lyrics);
})
```

출력:
```
끝없이 별빛이 내리던 밤     
기분 좋은 바람이
두 뺨을 스치고
새벽 바다 한곳을 보는       
아름다운 너와 나
그림을 그려갔어
모래 위 떨린 손끝으로       
날 향해 웃어주는 입술       
끝 모양과 저 달보다
사랑스러운 두 눈을 가진 네가
다정히 내 이름을
부르면 내 마음이
녹아내려 언제나
나 하날 위해 준비된
선물 같아 널 안으면
잠들지 않는 바다 위를       
너와 함께 걷는 거 같아      
하늘 아래 너와 나
남은 내 모든 날을 너에게
다 줘도 안 아까워
이제서야 내가
사랑에 눈을 뜬 건 가봐
경험하지 못했고
믿기지 않는 일만
일어나고 있는 거 아니
5월에 피는 봄꽃 처럼
내 사랑도 피어나
부는 바람에 살며시 실어 보내
다정히 내 이름을
부르면 내 마음이
녹아내려 언제나
나 하날 위해 준비된
선물 같아 널 안으면
잠들지 않는 바다 위를
너와 함께 걷는 거 같아
하늘 아래 너와 나
설레는 지금이
꿈이 아닌 걸 알잖아
난 더 바랄 게 없어
먼 훗날 내 생애
아주 작은 소리로
귓가에 말할 거야
내 곁에 머물러줘서
마음 다해 고맙다고
어떤 말로도 표현 못 할
내 인생의 전부였다고
이 순간  너를 꼭 안고
고백할게 언제나
우리 모든 날들과
별빛 아래 우리 그림자
제일로 특별하다고
길고 긴 겨울 끝을 지나
너의 앞에 서있는 지금
선명한 목소리로
널 사랑한다고
말할게
```


