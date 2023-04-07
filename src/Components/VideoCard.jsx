import React from "react";

const VideoCard = (props) => {
  const { snippet, statistics } = props.video;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className='h-82 w-56 shadow-md m-4 relative'>
      <img className='h-70 w-full ' src={thumbnails.high.url} />
      <div className='my-2 p-2'>
        <p className='font-bold'>{title}</p>
        <p className='my-4'>{channelTitle}</p>
        <small className='absolute bottom-1 my-2'>{viewCount} views</small>
      </div>
    </div>
  );
};

export default VideoCard;
