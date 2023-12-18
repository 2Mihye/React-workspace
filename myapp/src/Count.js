import React, {useState} from "react";

// 증가시키는 함수
function AddCount(){
    const [count, setCount] = useState(0);
    const increament = () => {
        setCount (count + 3);
    }

    return (
        <div>
            <h1> 숫자 :  {count}</h1>
            <button onClick = {increament}> 클릭하기</button>
        </div>
    )
}

function Count (){
    return (
        <div>
            <AddCount/>
        </div>
    )
}

export default Count;
