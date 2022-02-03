import React from "react";
import { useState } from "react";



function VideoInfo({ title, views, createdAt, upvotes, downvotes }) {

    const [upNumber, setUpNumber] = useState(upvotes);
    const [downNumber, setDownNumber] = useState(downvotes);

    const ChangeNumber = (like = true) => {
        if (like) {
            setUpNumber(upNumber + 1)
        } else {
            setDownNumber(downNumber + 1)
        }
    }


    const VanishComment = () =>{

    }

    // const handleClickUpBtn = () =>{
    //     setUpNumber (upNumber + 1);
    // }

    return (
        <>
            <h2>{title}</h2>
            <p>{views + " Views | Uploaded " + createdAt}</p>
            <button onClick={()=>ChangeNumber()}> {upNumber} 👍 </button>
            <button onClick = {()=> ChangeNumber(false)}> {downNumber + " 👎 " }</button>
            <p>
                <button onClick = {()=>VanishComment}>{'Hide Comments'}</button>
            </p>
        </>
    )

}

export default VideoInfo;
