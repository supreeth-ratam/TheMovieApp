import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'

import { db } from '../firebase'
import { useState, useEffect } from "react";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    limit,
  } from "firebase/firestore";
import { enableMapSet } from 'immer'

  

export default function Home() {
  const [movies,setMovies]  = useState([])
  const usersCollectionRef = collection(db,"movies")
  useEffect(()=>{
    function getUsers(){
      getDocs(usersCollectionRef).then(response =>{
        const movs = response.docs.map(doc =>({
          data: doc.data(),
          id: doc.id
        }))
        setMovies(movs)
      })
    }
    getUsers();
  },[])
 

  return (
   <MainSection>
    <ImgSlider/>
    <Viewers/>
    <Recommends/>
    {movies.map(movie => <li>{movie.data.overview}</li>)}
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