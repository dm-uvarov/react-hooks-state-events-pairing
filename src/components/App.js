import video from "../data/video.js";
import CommentList from "./CommentList.js";
import RenderComment from "./RenderComment.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"

      // code here

      />
      <CommentList comments={video.comments} />


    </div>
  );
}

export default App;
