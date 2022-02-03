import React from "react";

function RenderComment(comment) {
    console.log("comment =",comment);
    return (
    <p key = {comment.id}>
        <h6 key = {comment.user}>{comment.user}</h6>
        <p key ={comment.comment}>{comment.comment} </p>
    </p>
    );
}

export default RenderComment;


// comments: [
//     {
//       id: 1,
//       user: "duanebot",
//       comment: "first!",
//     },
//     {
//       id: 2,
//       user: "gaeron",
//       comment: "What a great tutorial!",
//     },
//   ],