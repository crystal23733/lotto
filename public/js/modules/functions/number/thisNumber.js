import data from '../../../API/historyNumber/history1123.json' with {type : 'json'};

import { thisNumber } from "../../selector.js";
import { numberColor } from "./numberColor.js";

// *최근 회차를 불러오는 함수
export const thisNumText = () => {
      thisNumber.one.textContent = data.drwtNo1;
      thisNumber.two.textContent = data.drwtNo2;
      thisNumber.three.textContent = data.drwtNo3;
      thisNumber.four.textContent = data.drwtNo4;
      thisNumber.five.textContent = data.drwtNo5;
      thisNumber.six.textContent = data.drwtNo6;
      thisNumber.bonus.textContent = data.bnusNo;
      numberColor();
}