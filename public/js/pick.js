// todo 템플릿에 할당 해야함
// todo 모듈화 필요
// *random번호를 뽑기위한 함수

import { randomNumber } from './modules/functions/randonNumber.js';
import { createBtn } from './modules/selectors/pickSelec.js';

createBtn.addEventListener('click', randomNumber);
