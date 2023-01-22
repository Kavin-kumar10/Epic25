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