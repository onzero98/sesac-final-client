import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";

function Register() {

    const [register, setRegister] = useState({userid:"", password:"", nickname:""});

    const getRegister = () => {
        console.log(register);
        axios.post('http://localhost:8080/api/user/register', {
            userid: register.userid,
            password: register.password,
            nickname: register.nickname,
        }).then((res) => {
            console.log(res.data.token)
            console.log("회원가입 성공!!!!");
        });
    };

    return (
        <>
            <div>
                아이디:{' '}
                <input
                    value={register.userid || ""}
                    onChange={(e) => {
                        setRegister({ ...register, userid: e.target.value });
                    }}
                />
                <br />
                비밀번호:{' '}
                <input
                    value={register.password || ""}
                    onChange={(e) => {
                        setRegister({ ...register, password: e.target.value });
                    }}
                />
                <br />
                닉네임:{' '}
                <input
                    value={register.nickname || ""}
                    onChange={(e) => {
                        setRegister({ ...register, nickname: e.target.value });
                    }}
                />
            </div>
            <button onClick={getRegister}>회원가입</button>
        </>
    )
}

export default Register;