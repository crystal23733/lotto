// todo 랜덤 번호를 생성할 수 있게 되면
// todo 템플릿에 할당 해야함
// *random번호를 뽑기위한 함수
const randomNumber = () => {
  let number = [];
  for(let i = 1; i <= 45; i++){
    number.push(i);
  }
  let random = [];
  for(let i = 1; i <= 6; i++){
    if(random.includes(randomPick) === true){
      let randomPick = Math.ceil(Math.random() * number.length);
      random.push(randomPick);
    }
    random.push(randomPick);
  }
  console.log(random);
}

randomNumber();