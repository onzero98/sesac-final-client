import React, { useState, useEffect,useLayoutEffect } from "react";
import axios from "axios";
import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";

function MyPage() {

    const [userProfile, setUserProfile] = useState([]);

    useLayoutEffect(() => {
        async function refresh() {

            const { data } = await Promise.resolve(getProfile());

            setUserProfile({
                nickname: data.nickname,
                points: data.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            })
        }
        refresh();
    }, []);

    const getProfile = async () => {
        return await axios.get("http://localhost:8080/api/user/userinfo");
    };

    return (
        <>
            <MyBox>
                <InfosAlign>
                    <p><InfoNickname>{userProfile.nickname}</InfoNickname> 님</p>
                    <p><InfoPoints>{userProfile.points}</InfoPoints> P</p>
                </InfosAlign>
                <ButtonAlign>
                    <Line />
                    <PostButton to={"/post"}>글쓰기</PostButton>
                </ButtonAlign>
            </MyBox>
        </>
    )
}

export default MyPage;

const MyBox = styled.div`
margin: auto;
margin-top: 24px;
max-width: 200px;
min-height: 140px;
width: 100%;
/* border: 1px solid red; */
font-size: large;
font-family: 'IBM Plex Sans KR', sans-serif;
`

const InfosAlign = styled.div`
text-align: right;
margin-right: 20px;
margin-top: 11px;
`

const InfoNickname = styled.span`

`

const InfoPoints = styled.span`
color: #e91b23;
font-weight: bold;

`

const ButtonAlign = styled.div`
text-align: right;
margin-top: 5px;
margin-right: 9px;
`

const Button = styled.button`
border: none;
padding: 6px 10px;
font-size: 15px;
cursor: pointer;
color: #fff;
background-color: #0078ff;
`

const BoxStyle = css`
border: none;
padding: 6px 10px;
font-size: 15px;
color: #fff;
background-color: #FF7800;;
`

const PostButton = styled(Link)`
margin-right: 10px;
text-decoration: none;
${BoxStyle}
`

const Line = styled.hr`
width: 90%;
border: 0px;
height: 1px;
background-color: rgba(0,0,0,0.15);
`