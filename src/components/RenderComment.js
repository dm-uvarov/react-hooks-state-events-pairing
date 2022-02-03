import React from "react";

function RenderComment(comment) {

    return (
        <div key={comment.id}>
            <h4 key={comment.user}>{comment.user}</h4>
            {comment.comment} 
        </div>
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

// {/* <div>
//     <h3></h3>
//     {some text}
// </div> */}
