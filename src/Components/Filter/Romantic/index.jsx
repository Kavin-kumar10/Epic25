import React from 'react'
import './Romantic.scss'
import SideNav from '../../SideNav'
import Card from '../../Card'
import CatDesc from '../../CatDesc'

const RomanticMovies = [{cat:"Romantic",name:"Forest Gump",year:"1994",img:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},
{cat:"Romantic",name:"Life is Beautiful",year:"1997",img:"https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},
{cat:"Romantic",name:"Modern Times",year:"1936",img:"https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
{cat:"Romantic",name:"City Lights",year:"2014",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HOVNsJqXpQxIQixZLYIzHVxFOPvAhkaJ0k3Y5XMu1Vx3bY9n"},
{cat:"Romantic",name:"Chhichhore",year:"2019",img:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Chhichhore_Poster.jpg/220px-Chhichhore_Poster.jpg"},
]

const Romantic = () =>{
    return(
        <div className="Romantic">
            <SideNav/>
            <div className="Content">
                <CatDesc/>
                <h1>Latest Epic Romantic Movies</h1>
                <div className="Cards">
                    {
                        RomanticMovies.map((RomanticMovie)=>{
                            return(
                                <Card name={RomanticMovie.name} year = {RomanticMovie.year} img = {RomanticMovie.img} cat={RomanticMovie.cat}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Romantic


//Romantic picture
// https://rukminim1.flixcart.com/image/416/416/l111lzk0/poster/1/d/j/medium-rings-Romantic-movie-2016-4k-on-fine-art-paper-hd-quality-original-imagczwux574g9hp.jpeg?q=70