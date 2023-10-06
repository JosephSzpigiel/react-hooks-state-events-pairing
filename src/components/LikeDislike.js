import { useState } from "react";

function LikeDislike({likes, dislikes}){
    const [likesCount, setLikesCount] = useState(likes)
    const [dislikesCount, setDislikesCount] = useState(dislikes)

    const likeText = `${likesCount} 👍`
    const dislikeText = `${dislikesCount} 👎`

    function handleLikeDislike(e){
        if(e.target.id === 'likes'){
            setLikesCount((currentValue)=> currentValue+1)
        }else{
            setDislikesCount((currentValue)=> currentValue+1)
        }
    }

    return(
        <div>
            <button id='likes' onClick={handleLikeDislike}>{likeText}</button>
            <button id='dislikes' onClick={handleLikeDislike}>{dislikeText}</button>
        </div>
    )
}

export default LikeDislike;