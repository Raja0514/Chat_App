import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home"
// import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  return (
    <>
      <Menu />

      <Routes>

        {/* <Route element={<PrivateRoutes />}> */}

          <Route path="/" element={<Chat />}  />
          <Route path="/home" element={<Home />}  />


        {/* </Route> */}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
        
      </Routes>
    </>
  );
}

export default App;
