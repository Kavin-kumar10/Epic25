import React from 'react'
import './Horror.scss'
import SideNav from '../../SideNav'
import Card from '../../Card'
import CatDesc from '../../CatDesc'

const horrorMovies = [{cat:"Horror",name:"Alien",year:"1979",img:"https://i.pinimg.com/originals/03/5a/1e/035a1e61ba9e4b1fd767bf8066c6f45e.jpg"},
{cat:"Horror",name:"Psycho",year:"2020",img:"https://upload.wikimedia.org/wikipedia/en/a/ac/Psycho_2020_poster.jpg"},
{cat:"Horror",name:"The shinning",year:"1980",img:"https://play-lh.googleusercontent.com/SXwpr8-M2iXvMT6hwkTK7knDF7x01Hy03e9tJEi1LA53n9cMYb0-OCtvBcpE_DuUAriVsgAu_lwEJXZGXrQl"},
{cat:"Horror",name:"Tumbbad",year:"2018",img:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00079092-wmcvrnxtgs-portrait.jpg"},
{cat:"Horror",name:"The Thing",year:"1982",img:"https://upload.wikimedia.org/wikipedia/en/6/65/Thingprequelfairuse.jpg"},
]

const Horror = () =>{
    return(
        <div className="Horror">
            <SideNav/>
            <div className="Content">
                <CatDesc/>
                <h1>Latest Epic Horror Movies</h1>
                <div className="Cards">
                    {
                        horrorMovies.map((horrorMovie)=>{
                            return(
                                <Card name={horrorMovie.name} year = {horrorMovie.year} img = {horrorMovie.img} cat={horrorMovie.cat}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Horror


//horror picture
// https://rukminim1.flixcart.com/image/416/416/l111lzk0/poster/1/d/j/medium-rings-horror-movie-2016-4k-on-fine-art-paper-hd-quality-original-imagczwux574g9hp.jpeg?q=70