import  { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import ProfilePage from "pages/profile";
import PostListPage from "pages/posts";
import PostEditPage from "pages/posts/edit";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";

export default function Router(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/posts" element={<PostListPage/>}></Route>
                <Route path="/posts/:id" element={<PostDetail/>}></Route>
                <Route path="/posts/new" element={<PostNew/>}></Route>
                <Route path="/posts/edit/:id" element={<PostEditPage/>}></Route>
                <Route path="/profile" element={<ProfilePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/signup" element={<SignupPage/>}></Route>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
        </>
    )
}
