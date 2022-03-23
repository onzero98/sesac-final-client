import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import styled, { css } from "styled-components/macro";

function Register() {

    const [register, setRegister] = useState({ userid: "", password: "", nickname: "" });

    const getRegister = () => {
        console.log(register);
        if (register.userid === "") {
            alert("아이디를 적어주세요");
        } else if (register.password === "") {
            alert("비밀번호를 적어주세요")
        } else if (register.nickname === "") {
            alert("닉네임을 적어주세요")
        } else {
            axios.post('http://localhost:8080/api/user/register', {
                userid: register.userid,
                password: register.password,
                nickname: register.nickname,
            }).then((res) => {
                if(res.data === "error"){
                    alert("이미 해당 아이디/닉네임은 존재합니다.")
                } else {
                    window.location.replace("/community");
                }
            })
        }
    };

    return (
        <Background>
            <FormData>
                <Header>회원 가입</Header>
                <InputBox
                    value={register.userid || ""}
                    placeholder={"ID"}
                    onChange={(e) => {
                        setRegister({ ...register, userid: e.target.value });
                    }}
                />
                <br />
                <InputBox
                    value={register.password || ""}
                    placeholder={"PASSWORD"}
                    onChange={(e) => {
                        setRegister({ ...register, password: e.target.value });
                    }}
                />
                <br />
                <InputBox
                    value={register.nickname || ""}
                    placeholder={"NICKNAME"}
                    onChange={(e) => {
                        setRegister({ ...register, nickname: e.target.value });
                    }}
                />
                <br />
                <RegisterButton onClick={getRegister}>SIGN UP</RegisterButton>
                <Line />
            </FormData>
        </Background>
    )
}

export default Register;

const Background = styled.div`
margin: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
/* background-color: #0078ff; */
`

const FormData = styled.div`
margin-top: 5rem;
display: flex;
align-items: center;
flex-direction: column;
min-height: 600px;
min-width: 400px;
background: rgba(0,120,255,0.2);
border-radius: 10px;
color: #000;
/* letter-spacing: 0.4rem; */
`

const Header = styled.h1`
font-family: 'Rajdhani', sans-serif;
font-size: 2em;
text-align:center;
/* margin-top: 11px; */
`

const InputBox = styled.input`
font-size: large;
font-family: 'Rajdhani', sans-serif;
width:80%;
height: 30px;
display: block;
padding: 10px 10px;
margin-bottom: 4px;
border-radius: none;
border: 1px solid rgba(0,0,0,0.15);
outline: none;
`

const RegisterButton = styled.button`
/* margin-top: 10px; */
width: 85%;
height: 40px;
padding: 6px 10px;
font-family: 'Rajdhani', sans-serif;
font-size: 25px;
color: #fff;
background-color: #0078ff;
border: none;
border-radius: 2px;
`

const Line = styled.hr`
width: 90%;
border: 0px;
height: 1px;
background-color: rgba(0,0,0,0.15);
margin: 20px 0;
`