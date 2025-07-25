import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => {
  return (
    <div className="text-red-500">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
      </Routes>
      
    </div>
  );
};

export default App;
