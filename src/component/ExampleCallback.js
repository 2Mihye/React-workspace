import React, {useCallback, useState} from "react";

function ExampleCallBack() {
    const [count, setCount] = useState(0);

    const increaClick = useCallback(() => {
        // useCallback을 사용하지 않으면 함수는 계속 사용할 준비가 되어있는 것! 사용하지 않아도 무방하나 쓰면 좋음.
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increaClick}>증가</button>
        </div>
    )
}
export default ExampleCallBack;