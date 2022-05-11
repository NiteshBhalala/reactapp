import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                    <img src={props.imgsrc} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">
                            <NavLink to="/" 
                            class=" button"
                            >Go somewhere</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;