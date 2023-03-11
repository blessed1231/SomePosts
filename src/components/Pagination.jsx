import React, {useState} from 'react';
import axios from "axios";

const Pagination = ({count}) => {
    const [posts, setPosts] = useState([])
    const arr = []
    for (let i = 1; i < count + 1; i++)
    {
        arr.push(i)
    }

    function identifyPage(e) {
        fetchPosts()
     return   e.target.innerHTML
    }

    async function fetchPosts() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${identifyPage}`)
        setPosts(response.data)
    }

    return (
       <ul className="posts__ul">
           {arr.map(el => (
               <li key={el} onClick={identifyPage} className="posts__list_items">{el}</li>
           ))}
       </ul>
    );
};

export default Pagination;