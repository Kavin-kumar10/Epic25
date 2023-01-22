import React from "react";
import { Link } from "react-router-dom";
import './SideNav.scss'
import {AiOutlineDoubleRight,AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'

const SideNav = () =>{
    return(
        <div className="SideNav">
            <h1>Epic_<span>25</span></h1>
            <div className="line"></div>
            <div className="catgry">
                <div className="Home">
                    <Link data-aos="fade-up"  to='/'><AiOutlineHome/></Link>
                    <Link data-aos="fade-up"  to='/about'><SiAboutdotme/></Link>
                </div>
                <Link data-aos="fade-up" data-aos-delay="200" to='/Horror' style={{textDecoration:"none"}}><h3 id="Hor">Horror<AiOutlineDoubleRight id="icon"/></h3></Link>
                <Link data-aos="fade-up" data-aos-delay="500" to='/Romantic' style={{textDecoration:"none"}}><h3 id="Rom">Romantic<AiOutlineDoubleRight id="icon"/></h3></Link>
                <Link data-aos="fade-up" data-aos-delay="700" to='/Mystery' style={{textDecoration:"none"}}><h3 id="Mys">Mystery <AiOutlineDoubleRight id="icon"/></h3></Link>
                <Link data-aos="fade-up" data-aos-delay="900" to='/Action' style={{textDecoration:"none"}}><h3 id="Act">Action<AiOutlineDoubleRight id="icon"/></h3></Link>
                <Link data-aos="fade-up" data-aos-delay="1100" to='/Anime' style={{textDecoration:"none"}}><h3 id="Ani">Anime<AiOutlineDoubleRight id="icon"/></h3></Link>
            </div>
        </div>
    )
}

export default SideNav