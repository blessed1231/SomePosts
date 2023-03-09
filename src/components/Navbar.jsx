import React from 'react';
import {Link} from "react-router-dom";
import '../index.css'
import {projectRoutes} from "../Router/ProjectRoutes.js";

const Navbar = () => {
    return (
        <div className="posts__navbar">
        <div className="posts__navbar_items">
            <Link to={projectRoutes.main.path}>Домой</Link>
            <Link to={projectRoutes.posts.path}>Посты</Link>
        </div>
            <div className="posts__navbar_items_account">
                    <Link to={projectRoutes.account.path}>Аккаунт</Link>
            </div>

        </div>
    );
};

export default Navbar;