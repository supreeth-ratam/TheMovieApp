import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Admin() {
  const [movie, setMovie] = useState([]);
  const api_key = "61d5685067d40273219407399d28b1b1";
  const [imdb, setImdb] = useState("");
  const [item, setItem] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${imdb}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovie(responseJson.results);
    };
    imdb && fetchMovie();
  }, [imdb]);
  function handleSubmit(event){    
    event.preventDefault();
  }
  function selectMovie(passme){
    setItem(passme)
    setImdb('')
  }
  function urlSubmit(event){
    event.preventDefault()
    var temp = item
    temp.playurl = url
    console.log(temp)
  }
  return (
    <Container>
      <Form>
        <form action="submit" onSubmit={handleSubmit}>
          <input type="text"placeholder="Enter Movie Name" value={imdb} onChange={(event) =>  setImdb(event.target.value)}/>
          <button>Submit</button>
        </form>
      </Form>
      
      {imdb && movie.map((item) => {
        var poster_url = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        return (
          <Wrap key={item.id} onClick = {() => selectMovie(item)}>
            <div>
            <h3>{item.title}</h3>
            {item.release_date && <span>{item.release_date.split('-')[0]}</span>}
            <p>{item.overview.length > 100? item.overview.substring(0,150)+'...':item.overview }</p>
            </div>
            <img src={poster_url} alt="" />
          </Wrap>
        );
      })}
    {item && <ItemContainer >
      <div>
      <h2>{item.title}</h2>
      {item.release_date && <span>{item.release_date}</span>}
      <p>{item.overview}</p>
      {item && <UrlForm>
        <form action="submit" onSubmit={urlSubmit} >
          <input type="text" placeholder="Enter Video Url" value={url} onChange={(event) => setUrl(event.target.value)}/>
          <button>Add Movie</button>
        </form>
      </UrlForm>}
      </div>
      {item && <img src= {`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />}
      
      </ItemContainer>}

    </Container>
  );
}
const Container = styled.div`
  margin-top: 70px;
  padding: 20px;
  display:flex;
  flex-direction:column;
  h1 {
    margin: 20px auto;
  }
  p{
    line-height:1.3;
  }
`;
const Wrap = styled.div`
  display: flex;
  min-width:300px;
  width:600px;
  max-width:600px;
  justify-content:space-between;
  overview:hidden;
  margin:5px 20px;
  letter-spacing:2px;
  transition: 200ms ease-in-out;
  border-radius:10px;

  font-size:1rem;
  img {
    max-height: 150px;
    margin-left:20px;
  }
  span{
    color:#93E1D8;
    font-weight:bold;
  }
  h3{
    color:#CC3F0C;
  }
  div{
    display:flex;
    flex-direction:column;
    gap: 5px;
    padding:5px 10px;
   
  }
  &:hover{
    border:2px solid white;
    transform:scale(1.1);
    margin:20px 40px;
    img{
      border-radius: 0px 10px 10px 0px;
    }
  }
`;
const Form = styled.div`
  padding: 10px 0;
  margin:0px 0px 20px;

  form {
    display: flex;
    gap: 10px;
    font-family : Reem Kufi;

    input{
        min-width:300px;
        background-color:rgba(0,0,0,0.3);
        border-radius:5px;
        border: 2px solid palevioletred;
        color:white;
        padding:5px;
        font-size: 16px;

    }
  }
  
  button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color:white;
    font-size: 16px;
    letter-spacing:2px;
    margin: 0 1rem;
    padding: 8px 1rem;
    cursor:pointer;
  }
  button:hover{
    background-color: palevioletred;
  }
`;
const ItemContainer = styled.div`
display:flex;
gap:20px;
font-size:1.3rem;
div{
  max-width:500px;
  display:flex;
  gap:10px;
  flex-direction:column;
}
h2{
  color:#CC3F0C;
  text-align: left;
}
img{
  max-width:300px;
  border: 4px solid rgb(249, 249, 249, 0.1);
}
span{
  color:#93E1D8;
  font-weight:bold;
}
`
const UrlForm = styled.div`
form {
  margin-top:20px;
  display: flex;
  gap: 10px;
  font-family : Reem Kufi;

  input{
      min-width:300px;
      background-color:rgba(0,0,0,0.3);
      border-radius:5px;
      border: 2px solid #A9FFF7;
      color:white;
      padding:5px;
      font-size: 16px;

  }
  button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid #A9FFF7;
    color:white;
    font-size: 16px;
    letter-spacing:2px;
    margin: 0 1rem;
    padding: 8px 1rem;
    cursor:pointer;
  }
  button:hover{
    background-color: #A9FFF7;
  }
}
`
