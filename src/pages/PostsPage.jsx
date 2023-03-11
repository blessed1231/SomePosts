import React, {useEffect, useState} from 'react';
import '../index.css'
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";
import useInput from "../hooks/useInput.js";
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
    const pageLimit = 10


    //post query
    const postQuery = searchParams.get('post')
    async function fetchPosts() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
            setPosts(response.data)
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

    // pagination fetching
        const arr = []
        for (let i = 1; i < pageLimit + 1; i++) {
            arr.push(i)
        }

        async function identifyPage(e) {
            const responsePage = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${e.target.innerHTML}`)
            setPage(e.target.innerHTML)
            setPosts(responsePage.data)
        }



    return (
        <div className={"posts__container"}>
            <h1 className="posts__list_header">Posts</h1>

            <input {...searchInput} type="search"/>
            <hr style={{width: '100%', paddingTop: '15px'}}/>
            <div className="posts__list">
                {posts.filter(
                    post => post.title.includes(postQuery))
                    .map(post => (

                    <Link to={`/posts/${post.id}`} className="posts__list_item">
                        {post.id}.  {post.title}
                    </Link>
                ))}
                <div className="posts__pagination">
                    <h2>Ты на  странице под номером: {page}</h2>

                    <ul className="posts__ul">

                        {arr.map(el => (
                            <li key={el} onClick={identifyPage} className="posts__list_items">{el}</li>
                        ))}
                    </ul>
                </div>
             </div>
        </div>
    );
};

export default PostsPage;

