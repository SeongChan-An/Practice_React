import React, { useState, useEffect } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./App.module.css";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <main className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />;
    </main>
  );
}

export default App;
