import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import PPForm from './pages/PPForm';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="signup" element={ <SignUp/> } />
        <Route path="login" element={<Login/>}/>
        <Route path="welcome" element={<Welcome isLoggedIn={true}/>} />
        <Route path="form" element={<PPForm/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
