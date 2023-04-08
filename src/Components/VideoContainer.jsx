import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import ButtonContainer from "./ButtonContainer";
import { Link } from "react-router-dom";

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
    <>
      <ButtonContainer />
      <div className='flex flex-col sm:flex-row flex-wrap my-2'>
        {videos.map((video) => (
          <Link to={`/watch/?v=${video.id}`} key={video.id}>
            {" "}
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
