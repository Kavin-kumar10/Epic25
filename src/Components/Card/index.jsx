import React from "react";
import { Link } from "react-router-dom";
import './Card.scss'
const Card = ({name,year,img,cat}) =>{

    return(
        <div className="Card" data-aos = "fade-up" data-aos-delay="300" data-aos-duration="500">
            <div className="Image">
            <Link to={`/${cat}/${name}`}>
                <img src={img} alt="Imgs" />
            </Link>
            </div>
            <div className="Description">
                <p>{name} <span>[{year}]</span></p>
            </div>
        </div>
    )
}

export default Card