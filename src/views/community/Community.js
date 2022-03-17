import React, { useState, useEffect, } from "react";
import styled from "styled-components/macro";
import TopicBox from "./main/TopicBox";
import UserBox from "./main/UserBox";

function Community() {

    return (
        <SiteView>
            <UserBox/>
            <TopicBox/>
        </SiteView>
    )
}

export default Community;

const SiteView = styled.div`
display: flex;
`