import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${process.env.REACT_APP_API_KEY}&maxResults=50`;
    const response = await fetch(url);
    const data = await response.json();
    const { items } = data;
    setVideos(items);
  };
  return (
    <div className='flex flex-wrap my-2'>
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
