import { BrowserRouter, Route, Routes, Navigate  }from "react-router-dom";

export default function Router(){
    return(
        <>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>}></Route>
                <Route path="/posts" element={<h1>Home page</h1>}></Route>
                <Route path="/posts/:id" element={<h1>Home page</h1>}></Route>
                <Route path="/posts/new" element={<h1>Home page</h1>}></Route>
                <Route path="/posts/edit/:id" element={<h1>Home page</h1>}></Route>
                <Route path="/profile" element={<h1>Home page</h1>}></Route>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
        </>
    )
}
