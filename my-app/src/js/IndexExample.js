import React, {useState} from "react";

function IndexExample(){
    const [inputText, setInputText] = useState(''); // 빈 글자를 나타낼 때 '', "" 상관없이 둘 중 아무거나 사용 가능

    // e.target.value
    // e : 사용자가 입력하거나 선택했을 때 어떤 값을 입력하고 선택했는지를 담기 위한 객체에 속함. (빈, 담아줄 바구니)
    // target : 사용자가 작성하거나 입력한 html에서 입력란을 나타냄. -> 버튼 그 자체(틀)를 나타냄.
    // value : 사용자가 입력한 값을 가져옴. -> 버튼 안에 들어간 값
    // target.value 는 select나 체크박스 button input 등 어디서든 쓸 수 있음.
    const handleChange = (e) => { // 괄호 안에 있는 e는 변수 선언과 같음.
        setInputText(e.target.value); // target.value : 
    }
    return(
        <div>
            <input type="text"
                   value={inputText}
                   onChange={handleChange}/>
            <p>내가 작성한 글 : {inputText}</p>
        </div>
    )
}

export default IndexExample;