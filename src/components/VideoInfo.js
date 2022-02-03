import React from "react";

function VideoInfo(video){
    console.log(video);
    return(
        <>
            <h3>{video.title}</h3>
            <p>{video.views + " Views | Uploaded " + video.createdAt}</p>
            <button > {video.upvotes}</button>
            <button > {video.downvotes}</button>
            <p> 
                <button>{'Hide Comments'}</button>
            </p>
        </>
    )

}

export default VideoInfo;
