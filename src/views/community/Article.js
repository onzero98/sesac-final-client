import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components/macro";
import Comment from "./Comment";
import moment from "moment";
import 'moment/locale/ko'

function Article() {

    // /article/ 제거한 param 값
    const id = window.location.pathname.substring(19);

    const [contents, setContents] = useState([]);

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

            // 조회수 증가
            axios.post('http://localhost:8080/api/article/vcount', {
                id: id,
            });
            axios.post('http://localhost:8080/api/article/totalComments', {
                id: id,
            }).then((res)=>{
                console.log(res);
            });
        }
        refresh();

    }, []);


    const getData = async () => {
        return await axios.get(`http://localhost:8080/api/article/readOne/${id}`);
    };

    return (
        <SiteView>
            <ArticleInfo>
                <Title>{contents.title}</Title>
                <UnderTitle>
                    {contents.nickname}
                    <View>
                        {moment(contents.createdAt).format("YYYY.MM.D. HH:mm:ss")}　
                        조회 {contents.view}
                    </View>
                </UnderTitle>
                <ContentBox>{contents.content}</ContentBox>
            </ArticleInfo>
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

const ArticleInfo = styled.div`
margin-left: 20px;
min-width: 1100px;
/* background-color: yellow; */
`

const Title = styled.div`
font-size: 40px;
font-weight: bold;

`

const UnderTitle = styled.div`

`

const ContentBox = styled.div`
margin-top: 30px;
min-height: 200px;
`

const View = styled.span`
margin-left: 800px;
`