import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import FreeQuote from "./views/FreeQuote/FreeQuote";
import Jobs from "./views/Jobs/Jobs";
import Help from "./views/Help/Help";
import Contact from "./views/Contact/Contact";
import Portal from "./views/Portal/Portal";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Blog from "./views/Blog/Blog";
export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/freequote" element={<FreeQuote />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/help" element={<Help />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portail" element={<Portal />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </>
    );
}