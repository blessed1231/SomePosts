import React from 'react';
import {Route, Routes} from "react-router-dom";
import {projectRoutes} from "./ProjectRoutes.js";
import Layout from "../components/Layout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import AccountPage from "../pages/AccountPage.jsx";
import PostsPage from "../pages/PostsPage.jsx";
import SinglePage from "../pages/SinglePage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
// import {ProtectedRoutes} from "../hooks/useAuth.js";

const ProjectRouting = () => {
    return (
            <Routes>
                <Route path={projectRoutes.main.path} element={<Layout/>}>
                    <Route path={projectRoutes.login.path}  element={<LoginPage />} />
                    {/*<Route element={<ProtectedRoutes />} >*/}
                        <Route index element={<HomePage />} />
                        <Route path={projectRoutes.account.path} element={<AccountPage/>} />
                        <Route path={projectRoutes.posts.path} element={<PostsPage />} />
                        <Route path={projectRoutes.posts.dynamicPath} element={<SinglePage />} />
                        <Route path={projectRoutes.notFound.path} element={<NotFoundPage />} />
                    {/*</Route>*/}
                </Route>
            </Routes>
    );
};

export default ProjectRouting;