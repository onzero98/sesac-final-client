import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Community from "./views/community/Community";
import Login from "./views/community/Login";
import Register from "./views/community/Register";
import Post from "./views/community/Post";
import axios from "axios";
import setAuthToken from "./utils/setAuthToken";

function App() {

  const [check, setCheck] = useState(false);

  // 로그인된 토큰을 전체 페이지 헤더에 삽입위해 여기서 사용
  useEffect(()=>{
    setAuthToken(localStorage.getItem('accessToken'));

    axios.get("http://localhost:8080/api/user/verify")
    .then((res)=>{
      if(localStorage.getItem('accessToken' !== undefined)){
        console.log(localStorage.getItem('accessToken'));
      } else {
        console.log("토큰 없음");
      }
    })
  },[]);

  return (
    <BrowserRouter>
      <NavBar/>
      {/* <NavBar istrue={istrue}/> */}
      <Routes>
        <Route path="/community/" check={check} exact={true} element={<Community />} />
        <Route path="/login/" element={<Login/>} />
        <Route path="/register/" element={<Register/>} />
        <Route path="/post/" element={<Post/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;