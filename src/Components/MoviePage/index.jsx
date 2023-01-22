import React from "react";
import './MoviePage.scss'
import SideNav from "../SideNav";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import Card from "../Card";

const MoviePage = ({movie,recomend}) =>{
    console.log(movie);
    return(
        <div className="MoviePage">
            <SideNav/>
            <div className="Content">
                <div className="Main">
                    <img src={movie.img} alt="img" />
                    <div className="Description">
                        <div id="star"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={20}/></div>
                        <h2>{movie.name}</h2>
                        <h5>Duration: {movie.duration}</h5>
                        <p>{movie.description}</p>
                        <br />
                        <h1>Reviews:</h1>
                        <p>This show was simply beautiful. I’ve rarely fallen in love with a world so quickly, an exception being IT 2017 and Little Women 2019, but this show? God, it was more wonderful with every minute. </p>
                    </div>
                </div>
                <div className="Recommend">
                    <h1>Similar Movies to Watch</h1>
                    <div className="Cards">
                        {
                            recomend.map((horrorMovie,index)=>{
                                return(
                                    <Card name={horrorMovie.name} key={index} year = {horrorMovie.year} img = {horrorMovie.img} cat={horrorMovie.cat}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage