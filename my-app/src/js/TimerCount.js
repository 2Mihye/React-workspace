import React, {useState, useEffect} from "react";
import Count from "./Count";

function Timer() { // Java와는 달리 파일명과 함수명이 같지 않아도 됨.
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count}`;
    })
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}
export default Timer;