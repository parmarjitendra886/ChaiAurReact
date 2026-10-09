import { useState } from "react";
import "../App.css";

const BgChanger = () => {
    const [bgColor1 , setbgColor1] = useState("red");
    const bgArray = [ "red", "yellow", "green", "pink" , "blue"]

    return(
        <>
        <div className="h-screen w-screen" style={{backgroundColor : `${bgColor1}`}}>
            <div className="flex gap-2 absolute bottom-4">
            {bgArray.map((bgColor , index) => {
                return <button key={index} className={`h-10 w-10 p-10`} onClick={ () => setbgColor1(bgColor)}  style={{backgroundColor: `${bgColor}` }}>{bgColor}</button>
                
            })}
            </div>
        </div>
        </>
    );
}

export default BgChanger;