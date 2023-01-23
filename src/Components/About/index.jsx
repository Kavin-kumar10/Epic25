import React from "react";
import Memb from '../../Assets/Priyanka K.jpg'
import Lead from '../../Assets/Kavin.jpg'
import {AiOutlineHome} from 'react-icons/ai'


import './About.scss'
import { Link } from "react-router-dom";

const About = () =>{
    return(
        <div className="About">
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <h1>Team UIX  
                </h1>
            </div>
            <div className="Mem">
                <img src={Lead} alt="pic" />
                <div className="details">
                    <div className="top">
                        <h1>Kavin Kumar M - (Team Lead)</h1>
                        <h2>MERN Stack Developer</h2>
                        <p>UI & Ux Designer and Developer.<br></br> Student at Bannari Amman Institute of Technology, Sathyamangalam.</p>
                    </div>
                    <div className="bottom">
                        <p>kavinkumar.ee20@bitsathy.ac.in</p>
                        <p>8344442124</p>
                    </div>
                </div>
                <Link to='/'>
                    <div className="Home"><AiOutlineHome id="icon"/></div>
                </Link>
            </div>
            <div className="Mem" id="teamMem">
                <img src={Memb} alt="Pic" /> 
                <div className="details">
                    <div className="top">
                        <h1>Priyanka P - (Team Member)</h1>
                        <h2>UI & UX Designer</h2>
                        <p>UI & UX Designer(Figma, Canvas). <br></br>Student at Bannari Amman Institute Of Technology, Sathyamanglam.</p>
                    </div>
                    <div className="bottom">
                        <p>priyanka.ee20@bitsathy.ac.in</p>
                        <p>9384902122</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About