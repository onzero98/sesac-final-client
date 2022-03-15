import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled from "styled-components/macro";

function Post() {

    const [post, setPost] = useState({title:"", content:"", board:""});

    const getPost = () => {
        // console.log(login);
        axios.post('http://localhost:8080/api/article/post', {
            title: post.title,
            content: post.content,
            topic: post.topic,
        }).then((res) => {
            console.log(res);
        });
    };

    return (
        <>
            <div>
                제목:{' '}
                <input
                    value={post.title || ""}
                    onChange={(e) => {
                        setPost({ ...post, title: e.target.value });
                    }}
                />
                <br />
                내용:{' '}
                <input
                    value={post.content || ""}
                    onChange={(e) => {
                        setPost({ ...post, content: e.target.value });
                    }}
                />
                <br />
                카테고리:{' '}
                <input
                    value={post.topic || ""}
                    onChange={(e) => {
                        setPost({ ...post, topic: e.target.value });
                    }}
                />
                <br />
            </div>
            <button onClick={getPost}>등록</button>
        </>
    )
}

export default Post;