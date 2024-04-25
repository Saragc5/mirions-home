import './index.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'



function App() {
  return (
    <div className="grid size-max container w-80 h-screen mx-auto  ">
    <Routes>
    <Route path="/" element={<Layout />} >
       <Route index element={<Home />} /> 
       <Route path="login" element={<Login />} /> 
       <Route path="register" element={<Register />} /> 
    </Route>
    </Routes>
     
    </div>
  );
}

export default App;
