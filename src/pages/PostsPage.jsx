import React, {useEffect, useState} from 'react';
import '../index.css'
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput.js";

const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchInput = useInput('')

    const postQuerry = searchParams.get('post')
    async function fetchPosts() {
        setLoading(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setPosts(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    useEffect(() => {
        setSearchParams({
            post: searchInput.value
        })
    }, [searchInput.value])

    return (
        <div className={"posts__container"}>
            <h1 className="posts__list_header">Posts</h1>
            <input {...searchInput} type="search"/>
            <hr style={{width: '100%', paddingTop: '15px'}}/>
            <div className="posts__list">
                {posts.filter(
                    post => post.title.includes(postQuerry)
                )
                    .map(post => (
                    <Link to={`/posts/${post.id}`} className="posts__list_item">
                        {post.id}.  {post.title}
                    </Link>
                ))}
                <div  style={{height: '10px'}}>
                    </div>
             </div>
        </div>
    );
};

export default PostsPage;

