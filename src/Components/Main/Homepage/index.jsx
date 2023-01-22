import React from "react";
import './Homepage.scss'
import {AiFillPlayCircle} from 'react-icons/ai'
import { Link } from "react-scroll";

const Homepage = () =>{
    return(
        <div className="Homepage">
            <div className="Page" >
                <h1 data-aos = "fade-right" data-aos-duration = "200" data-aos-delay = "0">Epic_<span>25 Movies</span></h1>
                <p data-aos = "fade-right" data-aos-delay = "100" data-aos-duration = "200">Yes, You are at the right place.  Here you can explore top 25 epic movies of all time.</p>
                <div className="explore" data-aos = "fade-right" data-aos-delay = "-100" data-aos-duration = "200">
                    <Link activeClass="active" to="catgry" spy={true} smooth={true} offset={50} duration={500}>
                        <p>Play <AiFillPlayCircle id="icon"/></p>
                    </Link>
                </div>
            </div>
            <div className="bgImg">
            </div>
        </div>
    )
}

export default Homepage