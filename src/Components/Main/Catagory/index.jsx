import React from "react";
import './Catagory.scss'
import { Link } from "react-router-dom";


// const catagories = [{Cat_Name:"Horror",img:"https://www.treebo.com/blog/wp-content/uploads/2018/04/Scary-Houses-in-Bangalore-.jpg",link:"/Horror"},
// {Cat_Name:"Mystery",img:"https://m.media-amazon.com/images/M/MV5BMmE1ZDA2YTktOTNiZS00ZmFhLTg0YWMtMTk4Y2Q4MGJhMGU0XkEyXkFqcGdeQXVyMDE2MTk5Nw@@._V1_.jpg",link:"Mystery"},
// {Cat_Name:"Romantic",img:"https://wallpaper.dog/large/4058.jpg",link:"/Romantic"},
// {Cat_Name:"Action",img:"https://i.scdn.co/image/ab67616d0000b273de8e1a2c09c6e25a2c03bc97",link:"/Action"},
// {Cat_Name:"Anime",img:"https://i.pinimg.com/736x/7e/ce/c4/7ecec434137d1fcbe023db38e06c1260.jpg",link:"/Anime"},

// ]

const Catagory = () =>{
    return(
        <div className="Catagory" id="catgry">
            <div className="Header">
                <h1>Cat<span>ago</span>ries</h1>
            </div>
            <div className="Catagories">
                <div style={{backgroundImage:"url('https://wallpaperaccess.com/full/1228567.jpg')"}}>
                    <Link to='/Horror' style={{textDecoration:"none"}}>
                        <h1 >Horror</h1>
                    </Link>
                </div>
                <div style={{backgroundImage:"url('https://p4.wallpaperbetter.com/wallpaper/945/873/190/dark-black-shadows-mysterious-wallpaper-preview.jpg')"}}>
                <Link to='/Mystery' style={{textDecoration:"none"}}>
                        <h1>Mystery</h1>
                    </Link>
                </div>
                <div style={{backgroundImage:"url('https://p4.wallpaperbetter.com/wallpaper/568/156/870/romantic-couple-on-beach-hd-photos-wallpaper-preview.jpg')"}}>
                <Link to='/Romantic' style={{textDecoration:"none"}}>
                        <h1>Romantic</h1>
                    </Link>
                </div>
                <div style={{backgroundImage:"url('https://p4.wallpaperbetter.com/wallpaper/344/820/37/t-34-russian-wwii-tank-action-movie-4k-wallpaper-preview.jpg')"}}>
                <Link to='/Action' style={{textDecoration:"none"}}>
                        <h1>Action</h1>
                    </Link>
                </div>
                <div style={{backgroundImage:"url('https://wallpaper.dog/large/20567424.jpg')"}}>
                <Link to='/Anime' style={{textDecoration:"none"}}>
                        <h1>Anime</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Catagory