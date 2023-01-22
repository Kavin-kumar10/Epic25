import React from 'react'
import './Anime.scss'
import SideNav from '../../SideNav'
import Card from '../../Card'
import CatDesc from '../../CatDesc'

const AnimeMovies = [{cat:"Anime",name:"Spiritted Away",year:"2001",img:"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
{cat:"Anime",name:"The Lion King",year:"1994",img:"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg"},
{cat:"Anime",name:"The Grave of the Fireflies",year:"1988",img:"https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"},
{cat:"Anime",name:"Your Name",year:"2016",img:"https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"},
{cat:"Anime",name:"Spider-Man Into the Spider Verse",year:"2018",img:"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"},
]

const Anime = () =>{
    return(
        <div className="Anime">
            <SideNav/>
            <div className="Content">
                <CatDesc/>
                <h1>Latest Epic Anime Movies</h1>
                <div className="Cards">
                    {
                        AnimeMovies.map((AnimeMovie)=>{
                            return(
                                <Card cat={AnimeMovie.cat} name={AnimeMovie.name} year = {AnimeMovie.year} img = {AnimeMovie.img} link={AnimeMovie.link}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Anime


//Anime picture
// https://rukminim1.flixcart.com/image/416/416/l111lzk0/poster/1/d/j/medium-rings-Anime-movie-2016-4k-on-fine-art-paper-hd-quality-original-imagczwux574g9hp.jpeg?q=70