import video from "../data/video.js";
import { useState } from "react";
import Header from "./Header.js";
import CommentList from "./CommentList.js";

function App() {

  const [showComments, setShowComments] = useState(true)

  function handleClickComments(){
    setShowComments((currentState) => !currentState)
  }

  const commentListRenderer = showComments ? <CommentList comments={video.comments}/> : null

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header video={video} showComments={showComments} onClickComments= {handleClickComments}/>
      <hr></hr>
      {commentListRenderer}
    </div>
  );
}

export default App;
