import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'

import {db} from '../firebase'
import {useState, useEffect} from "react";
import {
    collection,
    getDocs,
  } from "firebase/firestore";
import { enableMapSet } from 'immer'
import Poster from './Poster'

export const usersCollectionRef = collection(db,"movies")  

export default function Home() {
  const [movies,setMovies]  = useState([])
  
  useEffect(()=>{
    function getUsers(){
      getDocs(usersCollectionRef).then(response =>{
        const movs = response.docs.map(doc =>({
          data: doc.data(),
          id: doc.id
        }))
        setMovies(movs)
      }).catch(err => console.log(err))
    }
    getUsers();
  },[])
 

  return (
   <MainSection>
    <ImgSlider/>
    <Viewers/>
    <Recommends/>

    <Container>
    <h1>WatchList</h1>
    <div>
    {movies.map((movie) => <Poster movie = {movie.data} thumbnail = {true} /> )}</div>
    </Container>
   </MainSection>
   
  )
}
const MainSection = styled.div`
  z-index: -2;
  min-height: 100vh;
  padding: 80px 60px;
  overflow-x: hidden;
  background: url("/assets/images/home-background.png");
  background-size: cover;
`;
const Container = styled.div`
h1{
  margin:20px 0px;
}
div{
  display:flex;
  gap:20px;
}

`