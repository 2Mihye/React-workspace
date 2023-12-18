import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './js/Count';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}  {/* React의 주석은 이와 같이 사용함 ! */}
    {/* <Count /> */}
    {/* <ToggleButton /> */}
    {/* <IndexExample /> */}
    <ImageChange />
  </React.StrictMode> // React.StrictMode : React 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
);
reportWebVitals(); // reposrtWebVitals : React 성능 측정하기 위한 메서드

// 폴더 규칙 만들어줌 ! public -> 기본세팅이니 건드리지 않기
// src -> js / css / img 폴더를 src 밑에다 작성하기