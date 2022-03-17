import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import Login from "../Login";
import MyPage from "../MyPage";
import loginCheck from "../../../utils/loginCheck";

const UserBox = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        async function refresh() {
            const data = await loginCheck();
            
            setIsLoggedin(data);
            console.log(isLoggedin);
        }
        refresh();
    }, [isLoggedin]);

    return(
        <Section>
            {isLoggedin ? <MyPage/>:<Login/>}
        </Section>
    )
}

export default UserBox;

const Section = styled.div`
min-width: 300px;
`