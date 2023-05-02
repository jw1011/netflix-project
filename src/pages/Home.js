import React, { useEffect } from "react";
import { MovieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(MovieAction.getMovies());
  }, []);
  // loading이 true일때 로딩스피너 보여주고 아니면 데이터를 보여준다
  //true : 데이터 도착 전
  //false : 데이터 도착 후, 에러가 났을때
  if (loading) {
    return <ClipLoader color="#ff0000" loading={loading} size={150} />;
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
};

export default Home;
