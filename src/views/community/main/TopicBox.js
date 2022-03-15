import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled from "styled-components/macro";

const TopicBox = () => {

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        async function refresh() {
            const { data } = await axios.get("http://localhost:8080/api/article/readAll");
            console.log(data);
            // setFeeds(data);
        }
        refresh();
    }, []);

    return(
        <div>
            
        </div>
    )
}

export default TopicBox;