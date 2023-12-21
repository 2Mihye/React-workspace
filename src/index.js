import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppCopy from './component/App copy';
import Count from './component/Count';
import ToggleButton from './component/ToggleButton';
import IndexExample from './component/IndexExample';
import ImageChange from './component/ImageChange';
import ObjectExample from './component/ObjectExample';
import AnimalSound from './component/Animal';
import TimerCount from './component/TimerCount';
import ExampleCallback from './component/ExampleCallback';
import PracticeTwo from './component/PracticeTwo';
import ParentComponent from './component/ParentComponent';
import Blog from './component/Blog';
import Board from './component/Board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />*/} {/* React의 주석은 이와 같이 사용함 ! */}
    {/* <Count /> */}
    {/* <ToggleButton /> */}
    {/* <IndexExample /> */}
    {/* <ImageChange /> */}
    {/* <ObjectExample /> */}
    {/* <AnimalSound /> */}
    {/* <TimerCount /> */}
    {/* <ExampleCallback /> */}
    {/* <PracticeTwo /> */}
    {/* <ParentComponent /> */}
    <Board />
  </React.StrictMode> // React.StrictMode : React 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
);
reportWebVitals(); // reposrtWebVitals : React 성능 측정하기 위한 메서드

// 폴더 규칙 만들어줌 ! public -> 기본세팅이니 건드리지 않기
// src -> js / css / img 폴더를 src 밑에다 작성하기