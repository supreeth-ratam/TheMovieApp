import React from "react";
import styled from "styled-components";
import { api_key } from "../app/Admin";
import { useEffect, useState } from "react";
import Poster from "./Poster";

export default function Recommends() {
  const[movies,setMovies] = useState([])
  
  
  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovies(responseJson.results);
    };
    fetchMovie();
  }, []);

  return (
    <MainSection>
      <h1>Trending Now</h1>
      <PosterBox>
      {movies && movies.map((movie) =><Poster movie ={movie}/>)}</PosterBox>
    </MainSection>
  );
}
const MainSection = styled.div`
  margin-top: 30px;
  font-family: "Reem Kufi";
  h1{
    margin-bottom:20px;
  }
`;
const PosterBox = styled.div`
  display:flex;
  gap:20px;
  overflow: auto;
  padding:30px 0;
`
