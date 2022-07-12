import { BrowserRouter, Routes, Route } from "react-router-dom";

import Articles from "./pages/Articles";
import About from "./pages/About";
import Navbar from "./Navbar";
import NotFound from "./pages/NotFound";
import ArticleItem from "./pages/ArticleItem";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Articles />} />
                <Route path="/article/:id" element={<ArticleItem />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;