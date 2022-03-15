import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

function Login() {

    const [login, setLogin] = useState({ userid: "", password: "", });

    const getLogin = () => {
        axios.post('http://localhost:8080/api/user/login', {
            userid: login.userid,
            password: login.password,
        }).then((res) => {
            // 로컬스토리지에 저장후, 모든 페이지에 Header 에 삽입
            const token = res.data.token;
            localStorage.setItem('accessToken', token);

            if (token) {
                window.location.reload();
            } else {
                alert("로그인 실패")
                window.location.reload();
            }
        });
    };

    const getLogout = () => {
        localStorage.removeItem("accessToken");
        window.location.reload();
    }

    return (
        <>
            <LoginBox>
                <InputsAlign>
                    <InputBox
                        value={login.userid || ""}
                        placeholder={"아이디"}
                        onChange={(e) => {
                            setLogin({ ...login, userid: e.target.value });
                        }}
                    />
                    <InputBox
                        value={login.password || ""}
                        type={"password"}
                        placeholder={"비밀번호"}
                        onChange={(e) => {
                            setLogin({ ...login, password: e.target.value });
                        }}
                    />
                </InputsAlign>
                <ButtonAlign>
                    <Button onClick={getLogin}>로그인</Button>
                    {/* <button onClick={getLogout}>로그아웃</button> */}
                    <Line/>
                    <RegisterLink to="/register">회원가입</RegisterLink>
                </ButtonAlign>
            </LoginBox>
        </>
    )
}

export default Login;

const LoginBox = styled.div`
max-width: 200px;
min-height: 180px;
width: 100%;
border: 1px solid red;
`

const InputsAlign = styled.div`
text-align:center;
margin-top: 11px;
`

const InputBox = styled.input`
padding: 0 5px;
margin-bottom: 3px;
height: 30px;
border: 1px solid rgba(0,0,0,0.15);
outline: none;
`

const ButtonAlign = styled.div`
text-align: right;
margin-top: 5px;
margin-right: 9px;
`

const Button = styled.button`
border: none;
padding: 6px 10px;
font-size: 15px;
color: #fff;
background-color: #0078ff;
`

const Line = styled.hr`
width: 90%;
border: 0px;
height: 1px;
background-color: rgba(0,0,0,0.15);
`

const RegisterLink = styled(Link)`
margin-right: 5px;
color: #aaa;
text-decoration: none;
font-size: 15px;
`