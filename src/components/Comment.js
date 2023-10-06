import LikeDislike from "./LikeDislike";

function Comment({comment}){
    return(
        <div>
            <h2>{comment.user}</h2>
            <p>{comment.comment}</p>
            <LikeDislike likes={0} dislikes={0} />
        </div>
    )
}

export default Comment;