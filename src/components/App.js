import video from "../data/video.js";
import CommentList from "./CommentList.js";
import VideoInfo from "./VideoInfo";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}

      // code here

      />
      <VideoInfo
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <hr />
      <CommentList comments={video.comments} />


    </div>
  );
}

export default App;

