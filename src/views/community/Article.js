import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import UserBox from "./main/UserBox";

function Article() {

    // /article/ 제거한 param 값
    const id = window.location.pathname.substring(9);

    const [contents, setContents] = useState([]);

    useEffect(() => {
        async function refresh() {
            const { data } = await Promise.resolve(getData());

            setContents({
                topic: data.topic,
                title: data.title,
                content: data.content,
                nickname: data.nickname,
                createdAt: data.createdAt,
            })
        }
        refresh();
    }, []);


    const getData = async () => {
        return await axios.get(`http://localhost:8080/api/article/readOne/${id}`);
    };

    return (
        <div>
            <ArticleInfo>
                생성일: {contents.createdAt}
                <br />
                카테고리: {contents.topic}
                <br />
                제목: {contents.title}
                <br />
                내용: {contents.content}
                <br />
                작성자: {contents.nickname}
            </ArticleInfo>
            <Comment />
        </div>
    )
}

export default Article;

const ArticleInfo = styled.div`

`