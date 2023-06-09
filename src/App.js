//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";

//1.홈페이지, movie 페이지, movieDetail페이지
//2. 홈페이지 : 배너를 볼 수 있다
//3. 3가지 섹션의 영화를 볼 수 있다.(popular, top rated, upcoming)
//4. 각 영화에 마우스 호버시 제목, 장르, 평점, 인기도, 청불여부
//5. 영화를 슬라이드로 넘기면서 볼 수 있다

//6. 영화 디테일 페이지에서 영화에 대한 정보를 볼 수 있다 (포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임//)
//7. trailer 제공
//8. 리뷰
//9. 관련된 영화

//10. 영화 검색
//11. 영화 정렬
//12. 영화 장르 필터링

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
