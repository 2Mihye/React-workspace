import React, {useState} from "react";
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';

function ImageChange () {
    // 초기 이미지 경로는 ../img/image1.jpg 로 설정 되어있는 image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(false);

    // 이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭 함수 만들기
    // == : 동등연산자로 자동으로 형변환을 수행하기 때문에 데이터타입이 다를 경우에도 변환을 일부 시도하기도 함.
    // === : 일치연산자로 값과 데이터 타입이 모두 같아야 true를 변환함.
    const handleClick = () => {
        if (imageSrc === image1) { // ==은 형변환이 일어날 수 있기때문에 별로 권장하지 않음.
            setImageSrc(image2);
            // setIsClick(false);
        } else if (imageSrc === image2) { // 거짓일 때 false로 되어있는 값을 true로 변경
            setImageSrc(image3);
            //setIsClick(true);
        } else {
            // image가 image3일 경우 다시 처음 이미지로 돌아가기
            setImageSrc(image1);
        }
    }


    /* 이미지가 2개일 때
    const handleClick = () => {
        if (isClick) {
            setImageSrc(image2);
            // setIsClick(false);
        } else { // 거짓일 때 false로 되어있는 값을 true로 변경
            setImageSrc(image1);
            //setIsClick(true);
        }
    }*/

    return (
        <div>
            <img src={imageSrc} onClick={handleClick}/>
        </div>
    )
}

export default ImageChange;