

import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Agents from "./pages/Agents";
import Login from './pages/Login';
import  { useEffect, createContext,useState } from "react";


import About from './pages/About';
import Register from './pages/Register';
import Blogmain from './pages/Blogmain';

import Agentsform from "./pages/Agentsform";
import Logout from "./pages/Logout";

export const UserContext = createContext();
function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [islogin,setislogin]=useState(false);
  
  useEffect(()=>{
 setislogin(localStorage.getItem("islogin"));
  },[]);
  return (
    <UserContext.Provider value={{ islogin, setislogin }}>
         
     
   
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/home' element={<Home />} />
       <Route path='/properties' element={<Properties />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/agents' element={<Agents />} />
       <Route path="/login" element={<Login />} />
       <Route path='/about' element={<About/>} />
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/blog' element={<Blogmain/>} />
       <Route path="/logout" element={<Logout/>} />
       <Route path="/agentsregister" element={<Agentsform/>}/>
     </Routes>
     
  

    </UserContext.Provider>

  );
}

export default App;
