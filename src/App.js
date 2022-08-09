import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home"
import Chat1 from "./Pages/Chat1";
import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  return (
    <>
      <Menu />

      <Routes>

        <Route element={<PrivateRoutes />}>

          <Route path="/chat" element={<Chat />}  />
          <Route path="/home" element={<Home />}  />

        
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}  />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Chat1/>}/>
        
        
      </Routes>
    </>
  );
}

export default App;
