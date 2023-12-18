import React, {useState} from 'react'; // import는 꼭 항상 맨 위에 작성해야 함.
// useState : 상태를 관리하기 위해 사용되는 함수.
//            사용법) 배열형식으로 사용하며, 첫 번째 배열은 현재 상태값, 두 번째 배열은 상태 업데이트 하는 값.
// const [count, setCount] = userState(0);


// Js에서는 글자값인지 숫자값인지 중요하지 않다 ! 재사용이 가능하지, 재할당이 가능한지가 중요
// var : 재할당과 재선언 가능 (아래에서 안된 error 예제들 모두 가능)
// let : 재선언은 불가하나 재할당은 가능
let count = 0;
count =1; // let count = 2; 는 불가
// const : 새선언과 재할당 모두 불가능 - 한 번 선언하면 다시 값을 변경하거나 수정할 수 없음.
const msg = "hello"; // msg에 다른 값을 넣고 싶어서 추가로 값 변경을 하려하면 에러 발생


function Counter () {
  // JavaScript 코드 작성하는 공간
  // [초기값, 변경될 값] = 초기값 설정해주는 공간
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  }
  return ( // html 태그 코드는 return 안에 작성 !
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increament}>증가시키는 버튼</button> 

    </div>
  )
} // 리액트자바스크립트 에서는  onClick C를 대문자로 사용하는 카멜케이스를 활용 
function App() {
  return (
    <div>
      <h1>안녕 React?</h1>
      <h2>{msg}</h2>
      <Counter />
      <HiComponent/>
      <p>이것은 React JS 입니다.</p>
    </div>
  );
}
export default App; // 여기서 가장 기본으로 사용할 것이 App 이다라는 뜻.
// export default : 다른 파일에서 사용할 수 있도록 내보내는 부분이자 기본적으로 내보낼 항목을 지정하는 역할.
//                  다른 Js에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함.
function HiComponent(){
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 HiComponent입니다.</p>
    </div>
  )
}
