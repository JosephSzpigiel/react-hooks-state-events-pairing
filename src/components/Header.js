import LikeDislike from "./LikeDislike";

function Header({video, showComments, onClickComments}){
    const buttonText = showComments ? "Hide Comments" : "Show Comments"
    
    return(
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <LikeDislike likes={video.upvotes} dislikes={video.downvotes} />
            <br></br>
            <button onClick = {onClickComments}>{buttonText}</button>
        </div>
    )
}

export default Header;