import React from 'react'
import './Mystery.scss'
import SideNav from '../../SideNav'
import Card from '../../Card'
import CatDesc from '../../CatDesc'

const MysteryMovies = [{cat:"Mystery",name:"The Mirror Game",year:"2016",img:"https://m.media-amazon.com/images/M/MV5BOTQzYjk2ZTYtM2FhNi00ODQ1LWI0YWYtZDVhMzRiN2ZlMzQ5XkEyXkFqcGdeQXVyMTE3MzIyMDM5._V1_QL75_UX190_CR0,8,190,281_.jpg"},
{cat:"Mystery",name:"Seven",year:"1995",img:"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
{cat:"Mystery",name:"The Silence of the Lambs",year:"1991",img:"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
{cat:"Mystery",name:"Rear Window",year:"1954",img:"https://upload.wikimedia.org/wikipedia/commons/3/38/Rear_Window_film_poster.jpg"},
{cat:"Mystery",name:"The Lives of Others",year:"2006",img:"https://m.media-amazon.com/images/I/81LoE+rY+sL.jpg"},
]

const Mystery = () =>{
    return(
        <div className="Mystery">
            <SideNav/>
            <div className="Content">
                <CatDesc/>
                <h1>Latest Epic Mystery Movies</h1>
                <div className="Cards">
                    {
                        MysteryMovies.map((MysteryMovie,index)=>{
                            return(
                                <Card name={MysteryMovie.name} key={index} year = {MysteryMovie.year} img = {MysteryMovie.img} cat={MysteryMovie.cat}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Mystery


//Mystery picture
// https://rukminim1.flixcart.com/image/416/416/l111lzk0/poster/1/d/j/medium-rings-Mystery-movie-2016-4k-on-fine-art-paper-hd-quality-original-imagczwux574g9hp.jpeg?q=70