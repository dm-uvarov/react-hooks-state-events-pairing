import React from "react";
import RenderComment from "./RenderComment";



function CommentList({ comments }) {

    return (
        <>
            <h3>{comments.length} Comments'</h3>
            {comments.map(comment => {
                return (
                    <RenderComment key={comment.id} user={comment.user} comment={comment.comment} />
                )
            })


            }
        </>

    );
}

export default CommentList;

