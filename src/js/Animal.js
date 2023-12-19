// 컴포넌트가 function이나 class로 묶어 재사용할 수 있도록 만들어준 함수나 클래스
import React, {useState, useEffect} from "react";
function AnimalSound() {
    // script와 관련된 기능을 작성해줌
    const [animal, setAnimal] = useState('cat');

    useEffect(() => { // 연결(마운트)될 때 바로 실행되는 부분
        // console.log 안에 함수나 변수명을 사용하고자 한다면, '작은따옴표'나 "큰따옴표" 대신 `백틱(역따옴표)` 사용!!
        console.log(`${animal} : 야옹`); // 시작
        
        // 함수 연결이 정리(언마운트)될 때 실행되는 함수
        return () => { // 종료
            console.log(`${animal}`);
        };
        // [animal] animal이라는 값이 변경될 때마다 useEffect 안에 작성한 내부 코드를 다시 실행하기 위해 작성.
        // [] 추후에는 animal 하나만 들어있는 것이 아니라 여러 변수들이 들어있을 수 있으므로 배열로 묶어주는 것.
    }, [animal]); // animal이 바뀔 때마다 실행을 시켜주겠다는 의미.

    const handleSound = (newAnimal) => {
        setAnimal(newAnimal);
    }

    return(
        // 이 안에 HTML을 작성
        <div>
            <h1>동물 소리 앱</h1>
            <p>{animal}의 소리는 </p>
            <button onClick={() => handleSound('Cat')}>Cat</button>
            <button onClick={() => handleSound('Dog')}>Dog</button>
            <button onClick={() => handleSound('Chick')}>Chick</button>
        </div>
    )
}
export default AnimalSound;