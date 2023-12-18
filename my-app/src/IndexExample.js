import React, {useState} from "react";

function IndexExample(){
    const [inputText, setInputText] = useState(''); // 빈 글자를 나타낼 때 '', "" 상관없이 둘 중 아무거나 사용 가능
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