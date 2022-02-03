import React from "react";
import RenderComment from "./RenderComment";



function CommentList({comments}) {
    console.log(comments)
    console.log(comments[comments.length-1].id) 
    return (
        <>
            <h4>{comments[comments.length-1].id + ' Comments'} </h4>
            {comments.map(comment=> {
                <RenderComment key={comment.id} user = {comment.user} comment = {comment.comment} />
            }
            
            
            
            )
            

}       
        </>

    );
}

export default CommentList;

