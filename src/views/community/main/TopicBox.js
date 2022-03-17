import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components/macro";

const TopicBox = () => {

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        async function refresh() {
            const { data } = await axios.get("http://localhost:8080/api/article/readAll");
            console.log(data);
            setTitles(data);
        }
        refresh();
    }, []);

    return (
        <Box>
            <h1>전체</h1>
            {titles.map((res, idx) => (
                <Title key={idx}>
                    <NavTitle to={{
                        pathname: `/article/${res.id}`,
                    }}>{res.title}</NavTitle>
                </Title>
            ))}
        </Box>
    )
}

export default TopicBox;

const NavTitle = styled(Link)`
color: #000;
text-decoration: none;
`

const Title = styled.div`
margin-bottom: 5px;
`

const Box = styled.div`
min-width: 300px;
border: 1px solid red;
`