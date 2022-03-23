import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Community from "./views/community/Community";
// import Login from "./views/community/Login";
import Register from "./views/community/Register";
import Post from "./views/community/Post";
import Article from "./views/community/Article";

import setAuthToken from "./utils/setAuthToken";
import LeftSideBar from "./views/community/LeftSideBar";
import styled from "styled-components";


function App() {

  const id = window.location.pathname.substring(1,10);
  const [domain, setDomain] = useState("");

  // 로그인된 토큰을 전체 페이지 헤더에 삽입위해 여기서 사용
  useEffect(() => {
    setAuthToken(localStorage.getItem('accessToken'));
    setDomain(id);
  }, [id]);

  return (
    <BrowserRouter>
      <NavBar />
      {
        domain === "community" ?
          <Display>
            <LeftSideBar />
            <Routes>
              <Route path="/community/" element={<Community />} />
              <Route path="/community/article/:id" element={<Article />} />
              <Route path="/register/" element={<Register />} />
              <Route path="/post/" element={<Post />} />
            </Routes>
          </Display> :
          <Routes>

          </Routes>
      }

      <Footer />
    </BrowserRouter>
  );
}

export default App;

const Display = styled.div`
display: flex;
`