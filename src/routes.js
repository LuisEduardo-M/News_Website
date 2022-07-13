import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import ReadLater from "./pages/ReadLater";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Articles />} />
                <Route path="/read-later" element={<ReadLater />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;