import axios from "./axios";
import "./App.css";
import Video from "./Video";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get("/videos");
      setVideos(response.data);
      return response;
    }
    fetchPost();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            ></Video>
          )
        )}
      </div>
    </div>
  );
}

export default App;
