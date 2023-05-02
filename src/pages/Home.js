import React, { useEffect } from "react";
import { MovieAction } from "../redux/actions/MovieAction";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieAction.getMovies());
  }, []);
  return <div>Home</div>;
};

export default Home;
