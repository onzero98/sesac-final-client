import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MyPage from "./MyPage";
import styled, { css } from "styled-components/macro";
import loginCheck from "../../utils/loginCheck";

const LeftSideBar = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);

    useLayoutEffect(() => {
        async function refresh() {
            const data = await loginCheck();

            setIsLoggedin(data);
            console.log(isLoggedin);
        }
        refresh();
    }, [isLoggedin]);

    return (
        <LeftSide>
            {
                isLoggedin ?
                    <MyPage /> :
                    <LoginFirst>
                        <p>로그인이 필요합니다.</p>
                        <p>아직 계정이 없으신가요?</p>
                        <RegisterLink to="/register">회원가입</RegisterLink>
                    </LoginFirst>
            }
            <Line />
            <Category>
                <SearchBar type="text" placeholder={`게시글 검색...`} />
                <Tags>전체</Tags>
                <Tags>주식·투자</Tags>
                <Tags>분석</Tags>
                <Tags>자유</Tags>
            </Category>
        </LeftSide>
    )
}

export default LeftSideBar;

const LeftSide = styled.div`
border: 1px solid #cacdd1;
text-align: center;
justify-content: center;
min-width: 200px;
max-width: 200px;
min-height: 100vh;
background-color: #f1f3f4;
`

const Line = styled.hr`
/* width: 90%; */
border: 0px;
height: 1px;
background-color: rgba(0,0,0,0.15);
margin: 20px 0;
`

const LoginFirst = styled.div`
margin: auto;
margin-top: 24px;
max-width: 200px;
min-height: 140px;
width: 100%;
font-size: large;
font-family: 'IBM Plex Sans KR', sans-serif;
text-align: center;
`

const RegisterLink = styled(Link)`
color: #fff;
padding: 4px 11px;
border-radius: 10px;
background-color: #000;
text-decoration: none;
`

const SearchBar = styled.input`
color: #757575;
margin-top: 10px;
border: none;
border-radius: 5px;
width: 90%;
height: 30px;
outline: none;
`

const Category = styled.div`
margin-left: 10px;
text-align: left;
font-size: large;
font-family: 'IBM Plex Sans KR', sans-serif;
`

const Tags = styled.p`
margin-bottom: 5px;
cursor: pointer;
`