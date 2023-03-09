import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const SinglePage = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()


    const fetchPost = async() => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPost(response.data)
    }

    useEffect(() => {
        fetchPost()
    },[])

    function clickHandler() {
        navigate('/posts')
    }
    return (
        <div>
            <button className="posts__post_button" onClick={clickHandler}>Back</button>
            <h1 className="posts__post_title">{post.id}. {post.title}</h1>
            <h3 className="posts__post_body">{post.body}</h3>
            <h4 className="posts__post_autor">created by user w/id: {post.userId}</h4>

        </div>
    );
};

export default SinglePage;