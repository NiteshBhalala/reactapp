import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name} 
                                        <strong className="brand-name"> Nitesh Bhalala </strong> 
                                    </h1>
                                    {/* <p>We are a team of talented developer making websites</p>  */}
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ipsum esse quidem, quas aperiam maxime ut excepturi vero explicabo consequuntur, corrupti saepe ad consequatur enim? </p>
                                    <h6 className="my-3">
                                        {props.para}
                                    </h6>
                                    <div className="mt-3">
                                        
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Error" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;