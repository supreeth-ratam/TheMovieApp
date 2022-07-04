import React from 'react'
import styled from 'styled-components';

export default function Poster(props) {
    var poster_url = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
  return (

        <a>
        <MoviePoster src={poster_url} alt="No image" /></a>
   
  )
}


const MoviePoster = styled.img`
max-width:150px;
border-radius:10px;
transition:all 100ms;

&:hover{
    border: 2px solid white;
    cursor: pointer;
    scale: 1.1;
}
`
