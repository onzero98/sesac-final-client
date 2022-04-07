import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import Community from "./views/community/Community";
import Article from "./views/community/article/Article";
import Post from "./views/community/article/Post";

import Stock from "./views/stock/Stock"
import {ChatbotMain} from "./views/chat/ChatbotMain"

import setAuthToken from "./utils/setAuthToken";
import LeftSideBar from "./views/community/LeftSideBar";
import styled from "styled-components";
import Search from "./views/community/topic/Search";

function App() {

  const id = window.location.pathname.substring(1, 10);
  const [domain, setDomain] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen)
  };

  // 로그인된 토큰을 전체 페이지 헤더에 삽입위해 여기서 사용
  useEffect(() => {
    setAuthToken(localStorage.getItem('accessToken'));
    setDomain(id);
  }, [id]);

  return (
    <>
    <BrowserRouter>
      <NavBar />
      {
        domain === "community" ?
          <Display>
            <LeftSideBar />
            <Routes>
              <Route path="/community/" element={<Community />} />
              <Route path="/community/article/:id" element={<Article />} />
              <Route path="/community/post/" element={<Post />} />
              <Route path="/community/topic/" element={<Search />} />
            </Routes>
          </Display> :
          <Routes>
            <Route path="/community/*" element={<Community />} />
            <Route path="/stock/*" element={<Stock />} />
            {/* <Route path="/chatbot" element={<ChatbotMain/>} /> */}
          </Routes>
      }
      <Footer />
    </BrowserRouter>
    <OpenChat onClick={handleModal}>문의하기</OpenChat>
    <ChatbotMain isOpen={isOpen} setIsOpen={setIsOpen}></ChatbotMain>
    </>
  );
}

export default App;

const Display = styled.div`
display: flex;
`

const OpenChat = styled.button`
position: fixed;
border: none;
border-radius: 5px;
color: white;
background-color: #0078ff;
padding: 20px;
bottom: 50px;
right: 50px;
cursor: pointer;
z-index: 10;
`