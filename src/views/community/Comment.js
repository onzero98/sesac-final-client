import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import loginCheck from "../../utils/loginCheck";

function Comment() {

    // /article/ 제거한 param 값
    const id = window.location.pathname.substring(9);

    const [comments, setComments] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        async function refresh() {
            const data = await Promise.resolve(getComment());
            setComments(data.data);
        }
        refresh();
    }, []);

    const getComment = async () => {
        return await axios.get(`http://localhost:8080/api/comment/get/${id}`);
    };

    const getPost = async() => {

        const check = await loginCheck();

        if(check === false){
            // window.location.replace("/community");
            alert("로그인이 필요한 기능입니다.");
        }

        axios.post('http://localhost:8080/api/comment/post', {
            articleid: id,
            content: post.content,
        }).then((res) => {
            console.log(res);
            window.location.reload();
        });
    };

    const handleKeyPress = e => {if(e.key === 'Enter') {getPost();}}

    return (
        <div>
            <div>
                <InputBox
                    value={post.content || ""}
                    placeholder={"댓글을 입력해"}
                    onChange={(e) => {
                        setPost({ ...post, content: e.target.value });
                    }}
                    onKeyPress={handleKeyPress}
                />
                <Button onClick={getPost}>댓글 작성</Button>
            </div>
            <div>
                {comments.map((comment, idx) => (
                    <CommentBox>
                        <div>{comment.nickname}</div>
                        <div>{comment.content}</div>
                        <div>{comment.createdAt}</div>
                    </CommentBox>
                ))}
            </div>
        </div>

    )

}

export default Comment

const InputBox = styled.input`
padding: 0 5px;
margin-bottom: 3px;
height: 30px;
border: 1px solid rgba(0,0,0,0.15);
outline: none;
`

const Button = styled.button`
border: none;
padding: 6px 10px;
font-size: 15px;
color: #fff;
background-color: #0078ff;
`

const CommentBox = styled.div`
border: 1px solid red;
margin-bottom: 5px;
`