import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import FreeQuote from "./views/FreeQuote/FreeQuote";
import Jobs from "./views/Jobs/Jobs";
import Help from "./views/Help/Help";
import Contact from "./views/Contact/Contact";
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
            </Routes>
        </>
    );
}