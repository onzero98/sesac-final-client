import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components/macro";
import Trade from "./Trade"
import TradeLogs from "./TradeLogs"

const Stock = () => {

    const [show, setShow] = useState("trade");

    const [account, setAccount] = useState({});
    const [logs, setLogs] = useState([]);
    const back = "http://localhost:8080";
    const accountAPI = back + "/api/v1/account/";
    const logsAPI = back + "/api/v1/logs/";
    const user_id = "2498cd4b-3124-4231-a008-9ede7c47abb4";
  
    useEffect(() => {
      // 도커에 올릴때 ip 수정
      getAccount(accountAPI + user_id);
      getLogs(logsAPI + user_id);
    }, []);

    const getAccount = async (request) => {
        let account = {};
        account = await axios.get(request).then((response) => response.data);
        setAccount(account);
      };

    const getLogs = async (request) => {
        let logs = [];
        logs = logs.concat(
          await axios.get(request).then((response) => response.data)
        );
        setLogs(logs.concat());
      };

    const toggle_trade = () =>{
        setShow("trade");
    }

    const toggle_logs = () =>{
        setShow("logs");
    }

    return (
        <>        
        <SiteView>
            <SubList>
                <Item onClick={toggle_trade}>트레이드</Item>
                <Item onClick={toggle_logs}>거래이력</Item>
            </SubList>
            {show === "trade" ? <Trade></Trade>:<TradeLogs logs={logs} getAccount={getAccount}></TradeLogs>}
        </SiteView>
        </>
    )
}

export default Stock;

const SiteView = styled.div`
display: flex;
/* width: 100%; */
background-color: #f1f3f4;
justify-content: center;
`

const SubList = styled.div`
margin-top: 5vh;
max-height: 720px;
border-top: 1px solid rgba(0,0,0,0.1);
border-left: 1px solid rgba(0,0,0,0.1);
border-bottom: 1px solid rgba(0,0,0,0.1);
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
background-color: #fff;
`

const Item = styled.div`
min-width: 80px;
max-width: 80px;
font-family: 'IBM Plex Sans KR', sans-serif;
font-size: large;
text-decoration: none;
color: #0078ff;
cursor: pointer;
text-decoration: none;
padding: 14px 25px;
display: block;
transition: 0.3s ease-in-out;
:first-child{
    border-top-left-radius: 5px;
}
:hover{
    color: white;
    background-color: #0078ff;
}
`