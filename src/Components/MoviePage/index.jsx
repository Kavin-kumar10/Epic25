import React from "react";
import './MoviePage.scss'
import SideNav from "../SideNav";
import {AiFillStar,AiOutlineStar,AiFillPlayCircle} from 'react-icons/ai'
import Card from "../Card";

const MoviePage = ({movie,recomend}) =>{
    console.log(movie);
    return(
        <div className="MoviePage">
            <SideNav/>
            <div className="Content">
                <div className="Main">
                    <a href="#">
                        <img src={movie.img} alt="img" />
                        <AiFillPlayCircle id="play"/>
                    </a>
                    <div className="Description">
                        <div id="left">
                            <div id="star"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={20}/></div>
                            <p>Home . {movie.cat}</p>
                            <h2>Movie Name:&nbsp;{movie.name}</h2>
                            <p>Release Year:&nbsp;<span>{movie.year}</span></p>
                            <p>Genre:&nbsp;<span>{movie.cat}</span></p>
                            <p>Rating:&nbsp;<span>{(Math.random() * (4 - 3 + 1) + 3).toFixed(1)}</span></p>
                            <p>Box Office:&nbsp;<span>{(Math.random() * (100 - 20 + 1) + 20).toFixed(1)} Crore</span></p>
                        </div>
                        <div id="right">
                            <h1>Description:</h1>
                            <p>{movie.description}</p>
                            <h1>Review:</h1>
                            <p>{movie.Review}</p>
                        </div>
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