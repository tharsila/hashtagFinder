import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";


import Login from "./pages/login/login";
import PostList from "./components/PostList";
import { About } from "./pages/about";
import { SearchedHashtags } from "./pages/SearchedHashtags";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthProvider } from "./contexts/Auth/AuthProvider"


const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Hashtags" element={
                        <RequireAuth>
                            <SearchedHashtags/>
                        </RequireAuth>
                    } />
                    <Route path="/" element={<PostList />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;

