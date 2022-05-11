import React from "react";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common 
                name = "This is the About Page" 
                imgsrc = "https://media.istockphoto.com/photos/about-us-picture-id1303480001?b=1&k=20&m=1303480001&s=170667a&w=0&h=ob_SJ2EYlCZM2285-5Z15wy0JimRZoiuLzU4322tkF4="
                visit="/contact"
                btname="Contact Now"
            />
        </>
    )
}

export default About;