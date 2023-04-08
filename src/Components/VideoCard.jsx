import React from "react";

const VideoCard = (props) => {
  const { snippet, statistics } = props.video;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className='h-fit w-full sm:w-52  shadow-md  sm:m-4'>
      <img className='h-70 w-full ' src={thumbnails.high.url} />
      <div className='my-2 p-2'>
        <p className='font-bold mb-4'>{title}</p>
        <p className='mb-2'>{channelTitle}</p>
        <small className=' bottom-1 my-4'>{viewCount} views</small>
      </div>
    </div>
  );
};

export default VideoCard;
