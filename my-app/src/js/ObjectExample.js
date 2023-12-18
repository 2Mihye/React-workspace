import React, {useState} from "react";

function ObjectExample() {
    const [person, setPerson] = useState({name:'KH', age:20});
    // '' 작은 따옴표로 감싸주면 String 값으로 인식하기 때문에 int 값으로 바꿔주려면 작은 따옴표('')를 제거할 것!
    // 작음따옴표('')로 감싸주면 문자열과 숫자를 더하는 것으로 인식 '20'에 1 이라면 201111....로 결과값이 나옴 

    const updateAge = () => {
        setPerson({...person, age : person.age + 1});
        // ...person : ...이 현재 person 객체 속성을 펼쳐서 새로운 객체로 만들어 주는 역할. 이때 객체 속성들은 그대로 복사가 되어 만들어짐.
        // age : person.age + 1 은 age 속성에 person.age + 1한 값으로 저장하겠다는 의미
        // ...person, age 에서 콤마(,)는 복사된 객체에서 값이 변화하거나 추가해야 할 내용이 있으면 콤마 뒤의 값과 속성을 추가함.
    }
    return(
        <div>
            <p>Name : {person.name}</p>
            <p>Age : {person.age}</p>
            <button onClick={updateAge}>나이 올리기 버튼</button>
        </div>
    )
}
export default ObjectExample;