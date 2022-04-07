import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import parse from 'html-react-parser';
import Comment from "../comment/Comment";
import moment from "moment";
import 'moment/locale/ko'

function Article() {

    // /article/ 제거한 param 값
    const id = window.location.pathname.substring(19);
    const [userProfile, setUserProfile] = useState([]);
    const [contents, setContents] = useState([]);

    useLayoutEffect(() => {
        async function refresh() {
            const { data } = await Promise.resolve(getProfile());
            setUserProfile({
                nickname: data.nickname,
            })
        }
        refresh();
    }, []);

    useLayoutEffect(() => {
        async function refresh() {
            const { data } = await Promise.resolve(getData());
            setContents({
                tags: data.tags,
                title: data.title,
                content: data.content,
                nickname: data.nickname,
                view: data.view,
                createdAt: data.createdAt,
            })
        }
        refresh();
    }, []);

    const getProfile = async () => {
        return await axios.get("http://localhost:8080/api/user/userinfo");
    };

    const getData = async () => {
        return await axios.get(`http://localhost:8080/api/v1/article/${id}`);
    };

    const deletePost = async () => {
        await axios.delete(`http://localhost:8080/api/v1/article/?id=${id}`);
        alert("삭제되었음!");
        window.location.replace("/community");
    }

    return (
        <SiteView>
            <ArticleBox>
                <Title>{contents.title}</Title>
                <>
                    {contents.nickname}
                    <View>
                        {moment(contents.createdAt).format("YYYY.MM.D. HH:mm:ss")}　
                        조회 {contents.view}
                    </View>
                </>
                {/* <ContentBox dangerouslySetInnerHTML = { {  __html : contents.content } }></ContentBox> */}
                <ContentBox>{parse(`${contents.content}`)}</ContentBox>
                {userProfile.nickname === contents.nickname ? <Del onClick={deletePost}>삭제</Del> : null}
            </ArticleBox>
            <Comment />
        </SiteView>
    )
}

export default Article;

const SiteView = styled.div`
margin-top: 15px;
margin-left: 15px;
font-size: large;
font-family: 'IBM Plex Sans KR', sans-serif;
/* display: flex; */

`

const ArticleBox = styled.div`
margin-left: 20px;
min-width: 1100px;

/* background-color: yellow; */
`

const Title = styled.div`
font-size: 40px;
font-weight: bold;
`

const ContentBox = styled.div`
left: 0;
margin-top: 30px;
min-height: 200px;
`

const View = styled.span`
margin-left: 800px;
`

const Del = styled.button`
background: white;
padding: 5px 10px;
border: 1px solid rgba(0,0,0,0.15);
right: 10px;
transition: 0.2s ease-in-out;
cursor: pointer;
:hover{
    border: 1px solid rgba(0,0,0,0.4);
}
`