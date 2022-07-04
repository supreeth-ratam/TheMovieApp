import React from "react";
import styled from "styled-components";
import { auth,provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectUserName, selectUserEmail, selectUserPhoto } from "../features/userSlice";
import { setUserLoginDetails,setSignOutState } from "../features/userSlice";



export default function Header() {
 
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const photo = useSelector(selectUserPhoto);
  const username = useSelector(selectUserName);

  function handleSignIn(){
   signInWithPopup(auth, provider).then((response) => 
    {dispatch(setUserLoginDetails({
      name: response.user.displayName,
      email:response.user.email,
      photo: response.user.photoURL,
    }))
    console.log(response.user)}
    )
  }
  function handleSignOut(){
    dispatch(setSignOutState())
  }
  return (
    <Nav>
      <Logo src="assets/images/logo.svg"></Logo>
      {!username?<SignUp onClick={handleSignIn}>LOGIN</SignUp>:<>
      <NavMenu>
        <NavItem href= "/">
            <ItemImg src="/assets/images/home-icon.svg" alt="/"></ItemImg> Home</NavItem>
        <NavItem href= "/">
            <ItemImg src="/assets/images/series-icon.svg" alt="/"></ItemImg> Tv</NavItem>
        <NavItem href= "/">
            <ItemImg src="/assets/images/movie-icon.svg" alt="/"></ItemImg> Movies</NavItem>
        <NavItem href= "/">
            <ItemImg src="/assets/images/original-icon.svg" alt="/"></ItemImg> Sports</NavItem>
        <NavItem href= "/">
            <ItemImg src="/assets/images/search-icon.svg" alt="/"></ItemImg>Search</NavItem>
      </NavMenu>
      <Profile>
        <p>Hi, {username.split(' ')[0]}</p>
        <img src={photo} alt= "" onClick={handleSignOut}/>
      </Profile>
      </>}
      
    </Nav>
  );
}



const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #040714;
  padding: 5px 35px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  height: 70px;
  z-index:1000;
`;
const Logo = styled.img`
 max-height:60%;
 margin-bottom:13px;
 `;
const SignUp = styled.a`
    padding:5px 10px;
    border: 2px solid white;
    border-radius:5px;
    font-size:.9rem;
    cursor: pointer;
    background-color:rgba(0,0,0,0.6);
    letter-spacing:2px;
    transition:all 250ms ease-out;

    &:hover {
      color: #040714;
      background-color : white;
      border: 2px solid transparent;
    }
`
const NavMenu = styled.div`
 display:flex;
 align-items:center;
 margin: 0 auto 0 30px;
 gap:30px;
    @media(max-width : 760px){
        display:none;
    }
 `
const NavItem = styled.a`
display:flex;
position:relative;
align-items:center;
gap:6px;
text-transform: uppercase;
font-family: 'Reem Kufi';
font-size: .8rem;
font-weight:bold;
letter-spacing:3px;
 
&:before{
  content:"";
  background-color:white;
  position: absolute;
  border-radius: 4px;
  bottom: -6px;
  height:2px;
  left:30px;
  right:0px;
  visibility:hidden;
  transform: scaleX(0);
  transform-origin: left center;
  transition: all 250ms ease-in;
 }

 &:hover{
  &:before{
    visibility: visible;
    transform: scaleX(1);
  }
 }

`
const ItemImg = styled.img`
width:25px;
margin-bottom:2px;
`
const Profile = styled.div`
display:flex;
align-items:center;
justify-content:center;
img{
  border-radius:50%;
  height:100%;
  width:40px;
  margin: 0px 10px;
}
p{
  font-family: "Reem Kufi";
  letter-spacing: 1px;
  font-size:1.2rem;
  font-weight:semi-bold;

}
`