import React from "react";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common 
                name = "This is the Home Page" 
                imgsrc = "https://www.pngitem.com/pimgs/m/7-74076_clipart-of-plane-airplane-top-and-airline-wing.png"
                visit="/service"
                btname="Get Started"
            />
        </>
    )
}

export default Home;