import React from "react";

function CommentList(props) {
    console.log(props)
    return (
        <>
            <h4>${2 + 'Comments'} </h4>
            {/*<h4>{props.video.comments[props.video.comments.length - 1].id + 'Comments'}   </h4>*/}


        </>

    );
}

export default CommentList;