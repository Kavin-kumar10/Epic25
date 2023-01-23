import React from "react";
import './Catagory.scss'
import { Link } from "react-router-dom";



const Catagory = () =>{
    return(
        <div className="Catagory" id="catgry">
            <div className="Header">
                <h1>Cat<span>ago</span>ries</h1>
            </div>
            <div className="Catagories">
                    <Link to='/Horror' id="link" style={{textDecoration:"none",backgroundImage:"url('https://wallpaperaccess.com/full/1228567.jpg')"}}>
                        <h1 >Horror</h1>
                    </Link>
                    <Link to='/Mystery' id="link" style={{textDecoration:"none",backgroundImage:"url('https://p4.wallpaperbetter.com/wallpaper/945/873/190/dark-black-shadows-mysterious-wallpaper-preview.jpg')"}}>
                        <h1>Mystery</h1>
                    </Link>
                    <Link to='/Romantic' id="link" style={{backgroundImage:"url('https://p4.wallpaperbetter.com/wallpaper/568/156/870/romantic-couple-on-beach-hd-photos-wallpaper-preview.jpg')",textDecoration:"none"}}>
                        <h1>Romantic</h1>
                    </Link>
                    <Link to='/Action' id="link" style={{backgroundImage:"url('https://p4.wallpaperbetter.com/wallpaper/344/820/37/t-34-russian-wwii-tank-action-movie-4k-wallpaper-preview.jpg')",textDecoration:"none"}}>
                        <h1>Action</h1>
                    </Link>
                    <Link to='/Anime' id="link" style={{backgroundImage:"url('https://wallpaper.dog/large/20567424.jpg')",textDecoration:"none"}}>
                        <h1>Anime</h1>
                    </Link>
            </div>
        </div>
    )
}


export default Catagory