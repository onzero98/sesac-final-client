import React, { useState, useEffect, } from "react";
import axios from "axios";
import styled from "styled-components/macro";

function Post() {

    const [post, setPost] = useState({ title: "", content: "", tags: "" });

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        async function refresh() {
            const data = await Promise.resolve(getTopics());
            setTopics(data.data);
        }
        refresh();
    }, []);

    const getTopics = async () => {
        return await axios.get(`http://localhost:8080/api/topic/getAll`);
    };

    const getPost = () => {
        console.log(post);
        if (post.title === "") {
            alert("제목을 적어주세요");
        } else if (post.content === "") {
            alert("내용을 적어주세요")
        } else if (post.tags === "" || post.tags === "default"){
            alert("주제를 선택")
        }
        else {
            axios.post('http://localhost:8080/api/article/post', {
                title: post.title,
                content: post.content,
                tags: post.tags,
            }).then((res) => {
                console.log(res);
                window.location.replace("/community");
            });
        }
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
                <select
                    value={post.tags}
                    onChange={(e) => {
                        setPost({ ...post, tags: e.target.value });
                    }}
                >
                    <option value="default"> -- TOPIC -- </option>
                    {topics.map((topic, idx) => (
                        <option value={topic.url} key={idx}>{topic.tags}</option>
                    ))}
                    {/* <option value={"free"}>자유</option>
                    <option value={"game"}>게임</option>
                    <option value={"stock"}>주식·투자</option> */
                    }
                </select>
                <br />
            </div>
            <button onClick={getPost}>등록</button>
        </>
    )
}

export default Post;