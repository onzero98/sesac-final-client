import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import Login from "../Login";

const UserBox = () => {

    useEffect(() => {
        async function refresh() {
            const { data } = await axios.get("http://localhost:8080/api/user/verify");
            console.log(data);
            // setFeeds(data);  
        }
        refresh();
    }, []);

    return(
        <div>
            {}
            <Login></Login>
        </div>
    )
}

export default UserBox;