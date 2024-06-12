import React,{useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// HOC
import MovielayoutHoc from "../layout/Movie.layout";
import { MovieContext } from "../context/Movie.content";
import Slider from "react-slick";
import{FaCcVisa, FaApplePay} from 'react-icons/fa'

const MoviePage = () => {
  const {id} = useParams();
  const {movie, setMovie} = useContext(MovieContext);
  const [cast, setCast] = useState();
  const[similarMovies, setSimilarMovies] = useState();
  const[recommendedMovies, setRecommendedMovies] = useState();

useEffect(() => {
  const requestCast = async () => {
    const getCast = await axios.get(`/movie/${id}/credits`);
    setCast(getCast.data.cast);
  };
  requestCast();
}, [id]);

useEffect(() => {
  const requestSimilarMovies = async () => {
    const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
    setSimilarMovies(getSimilarMovies.data.results);
  };
  requestSimilarMovies();
}, [id]);

useEffect(() => {
  const requestRecommendedMovies = async () => {
    const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
    setRecommendedMovies(getRecommendedMovies.data.results);
  };
  requestRecommendedMovies();
}, [id]);

const settingsCast = {};
const settings = {};

  return (
    <>
      {/** MovieHero*/}
      <div className="my-12 container px-4 ml:ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
        </div>
      </div>
    </>
  );
};

export default MovielayoutHoc(MoviePage);
