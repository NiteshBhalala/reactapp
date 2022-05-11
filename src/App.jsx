import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes , Navigate} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/about" element = {<About />} />
                <Route path="/service" element = {<Services />} />
                <Route path="/contact" element = {<Contact />} />
                <Route path="/" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    )
}
export default App;