import React, { useState, useEffect, } from "react";
import styled from "styled-components/macro";
import TopicBox from "./main/TopicBox";
import UserBox from "./main/UserBox";

function Community(check) {

    return (
        <div>
            {check ? <div>로그인댐</div>:<div>로그인안댐</div>}
            <UserBox/>
            <TopicBox/>
        </div>
    )
}

export default Community;