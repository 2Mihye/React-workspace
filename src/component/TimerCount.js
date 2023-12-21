import React, {useState, useEffect} from "react";
import Count from "./Count";

let count = 0;
count = 1;
const msg = "hello";

function Timer() {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increament}>버튼</button>
        </div>
    )
}
export default Timer;

/*
function Timer() { // Java와는 달리 파일명과 함수명이 같지 않아도 됨.
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count}`; // 카운트 될 때마다 타이틀에도 반영이 됨. 예를들면 남은 수량을 표라던지 수량을 넣을 수도 있음.
    })
    {/*
        <button onClick={() => setCount(count + 1)}>Click</button>
        위 버튼 클릭와 const increament로 작성해준 메서드는 동일한 효과를 지닝다.
        const increament = () => {  
            setCount(count + 1);
        }
    *//*}

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            {/* 
                <button onClick={(increament) => setCount(count + 1)}>Click</button>
    */ /*}
        </div>
    )
}
export default Timer;
*/