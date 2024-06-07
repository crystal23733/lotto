import https from 'https';
import fs from 'fs';
import path from 'path';
import { __dirname } from '../modules/findDirectory.js';

// !트래픽 초과 방지를 위해 일정한 시간마다 데이터 생성
const numberAPI = () => {
  let i = 1;
  const autoDataCreate = setInterval(() => {
      let url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=+${i}`;
      console.log(i, url);
      https.get(url, (res) => {
      let body = '';
      res.on('data', (data) => {
        body += data.toString();
        fs.writeFile(path.join(__dirname, `/public/js/API/historyNumber/history${i}.json`), body, (err) => {
          if(err){
            throw new Error('데이터를 생성할 수 없습니다.');
          }
          console.log('데이터를 성공적으로 생성하였습니다.', i);
          i++;
        });
      });
    });
    if(i === 1122){
      clearInterval(autoDataCreate);
    }
  }, 7000);
}

numberAPI();