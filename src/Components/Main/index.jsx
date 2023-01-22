import React,{useEffect,useState} from "react";
import Homepage from "./Homepage";
import Catagory from "./Catagory";
import Preloader from "../Preloader";

const Main = () =>{
    const [isLoading,setLoading] = useState(true);
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },2000);
    },[])
    return(
        <div>
             {
        isLoading?(<Preloader/>)
        :
        (<div className='Main'>
            <Homepage/>
            <Catagory/>
        </div>)
      }

        </div>
    )
}

export default Main