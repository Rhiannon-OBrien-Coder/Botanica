import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/Navbar";
import LoginForm from "./components/Forms/LoginForm";
import SignUpForm from "./components/Forms/SignUpForm";
import Store from "./components/Store/Store"
import Profile from "./components/Profile/Profile"
import VirtualGarden from "./components/VirtualGarden/VirtualGarden"
import VirtualPlot from "./components/VirtualPlot/VirtualPlot";
import FAQ from "./components/FAQ/FAQ"
import * as userService from "./services/userService";


function App() {
  const [user, setUser] = useState(userService.getUser());
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserData = async (id) => {
      try {
        const userData = await userService.getUserData(id);
        if (userData.error) {
          throw new Error(userData.error);
        }
        setUserData(userData);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    user ? getUserData(user._id) : setUserData({});
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={ <LoginForm setUser={setUser} setUserData={setUserData}/>}/>
        <Route path="/signup" element={ <SignUpForm setUser={setUser} setUserData={setUserData} />}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/virtual-garden' element={<VirtualGarden/>}/>
        <Route path='/virtual-plot' element={<VirtualPlot/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        {/* <Route path='/shed' element={<Shed/>}/>
        <Route path='/plants/*' element={<Plants/>}/> */}
      </Routes>
    </>
  )
}

export default App;