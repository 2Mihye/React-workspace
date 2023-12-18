import React, {useState} from "react";

function ToggleButton(){
    // Js 공간
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }

    return (
        <div>
            {/* 
                만약 버튼이 true라면 글자로 On 이라는 글자가 표시될 수 있도록 삼항 연산자를 이용하여 표기
                            삼항연산자 = 어떤 값 ?  true라면 나타날 상태 : false면 나타날 상태
            */}
            <p>버튼 상태 : {isOn ? 'On' : 'Off'}</p>
            <button onClick={toggle}>버튼 상태 변경하기</button>
        </div>
    )
}
export default ToggleButton;