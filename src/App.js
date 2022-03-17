import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Community from "./views/community/Community";
import Login from "./views/community/Login";
import Register from "./views/community/Register";
import Post from "./views/community/Post";
import Article from "./views/community/Article";

import setAuthToken from "./utils/setAuthToken";
import UserBox from "./views/community/main/UserBox";

function App() {

  // 로그인된 토큰을 전체 페이지 헤더에 삽입위해 여기서 사용
  useEffect(()=>{
    setAuthToken(localStorage.getItem('accessToken'));
  },[]);

  return (
    <BrowserRouter>
      <NavBar/>
      {/* <UserBox/> */}
      <Routes>
        <Route path="/community/" exact={true} element={<Community />} />
        <Route path="/login/" element={<Login/>} />
        <Route path="/register/" element={<Register/>} />
        <Route path="/post/" element={<Post/>} />
        <Route path="/article/:id" element={<Article/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;