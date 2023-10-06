import Comment from "./Comment";
import { useState } from "react";

function CommentList({comments}){
    const [searchTerm, setSearchTerm] = useState('')

    function onSearchHandler(e){
        setSearchTerm(e.target.value.toLowerCase())
    }

    const displayComments = comments.filter(comment => {
        return comment.user.toLowerCase().includes(searchTerm)
    })

    const commentsComponents = displayComments.map((comment)=>{
        return <Comment key = {comment.id} comment={comment} />
    })


    return(
        <div>
            <h1>{comments.length} Comments</h1>
            <input type="text" placeholder="Search by User" onChange={onSearchHandler}></input>
            {commentsComponents}
        </div>
    )
}

export default CommentList;