import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header';
import Home from './components/Home';
import Admin from './app/Admin';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path= '/home' element={<Home/>}/>
      <Route path= '/admin' element={<Admin/>}/>
    </Routes>
   </Router>
  );
}

export default App;
