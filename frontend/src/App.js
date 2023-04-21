import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="signup" element={ <SignUp/> } />
      </Routes>
      
    </div>
  );
}

export default App;
