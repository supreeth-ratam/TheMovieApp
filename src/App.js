import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header';
import Home from './components/Home';
import Admin from './app/Admin';

import { useSelector } from "react-redux/es/exports";
import { selectUserName} from "./features/userSlice";

function App() {
  var username = useSelector(selectUserName)
  return (
   <Router>
    <Header/>
    <Routes>      
      <Route path='/' element={!username?<Login/>:<Home/>}/>
      <Route path= '/admin' element={<Admin/>}/>
    </Routes>
   </Router>
  );
}

export default App;
