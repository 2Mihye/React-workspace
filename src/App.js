import React from "react"; // 중괄호가 없는 것은 통째로 import
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // 중괄호가 있는 것은 필요한 것만 쏙쏙 골라서 import
import Blog from './component/Blog';

const About = () => <div>소개 페이지</div>
/* const About = () => {

  }*/

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/About">소개</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;