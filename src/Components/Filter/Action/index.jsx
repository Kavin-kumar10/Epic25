import React from 'react'
import './Action.scss'
import SideNav from '../../SideNav'
import Card from '../../Card'
import CatDesc from '../../CatDesc'

const ActionMovies = [{cat:"Action",name:"The Dark Knight",year:"2008",img:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"},
{cat:"Action",name:"The Lord of the Rings - Return of the King",year:"2003",img:"https://images.moviesanywhere.com/45bc0ec075bfc0b4d8f184a7cc5bf993/876ed805-83b1-4387-b0d0-62d08c36536d.jpg"},
{cat:"Action",name:"Inception",year:"2020",img:"https://rukminim1.flixcart.com/image/416/416/l0r1j0w0/poster/j/o/u/large-inception-poster-print-poster-on-large-print-36x24-inches-original-imagcgwwykj65vuv.jpeg?q=70"},
{cat:"Action",name:"The Matrix",year:"2021",img:"https://rukminim1.flixcart.com/image/416/416/kmns7m80/poster/l/p/f/medium-the-matrix-an-american-maxi-origins-jumbo-medium-size-original-imagfgb6gx9yhwzs.jpeg?q=70"},
{cat:"Action",name:"The Star Wars - The Empire Strikes Back",year:"1980",img:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
]

const Action = () =>{
    return(
        <div className="Action">
            <SideNav/>
            <div className="Content">
                <CatDesc/>
                <h1>Latest Epic Action Movies</h1>
                <div className="Cards">
                    {
                        ActionMovies.map((ActionMovie)=>{
                            return(
                                <Card name={ActionMovie.name} year = {ActionMovie.year} img = {ActionMovie.img} cat={ActionMovie.cat}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Action


//Action picture
// https://rukminim1.flixcart.com/image/416/416/l111lzk0/poster/1/d/j/medium-rings-Action-movie-2016-4k-on-fine-art-paper-hd-quality-original-imagczwux574g9hp.jpeg?q=70