import React, {useEffect, useRef, useState} from 'react';
import '../index.css'
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput.js";
import useScroll from "../hooks/useScroll.js";
import Pagination from "../components/Pagination.jsx";

const PostsPage = () => {
    //states
    const [posts, setPosts] = useState([])
    // searchParams && loading
    const [loading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    // input control
    const searchInput = useInput('')
    //Pagination
    const [page, setPage] = useState(1)


    const postQuerry = searchParams.get('post')
    async function fetchPosts() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
            setPosts(response.data)
        setPage(prev => prev + 1)

    }
//useEffects fetch && params
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
                    post => post.title.includes(postQuerry))
                    .map(post => (
                    <Link to={`/posts/${post.id}`} className="posts__list_item">
                        {post.id}.  {post.title}
                    </Link>
                ))}
                <div className="posts__pagination">
                  <Pagination count={10}/>
                </div>
             </div>
        </div>
    );
};

export default PostsPage;

