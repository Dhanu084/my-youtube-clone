import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenuOpenFalse } from "../Slices/appSlice";

const SingleVideo = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const id = searchParams.get("v");
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const fetchVideoById = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setVideoDetails(data.items[0]);
  };

  useEffect(() => {
    dispatch(setMenuOpenFalse());
    fetchVideoById();
  }, []);

  return (
    <div className='h-2/4 my-5 sm:p-2 sm:h-1000 sm:mx-5 sm:my-0 sm:w-3/4'>
      <iframe
        className='w-full'
        height='400'
        src={`https://www.youtube.com/embed/${id}`}
        title='YouTube video player'
        frameBorder='0'
        allow='autoplay'
        allowFullScreen
      ></iframe>
      {videoDetails && (
        <div className='h-2/5 sm:h-24 shadow-lg w-full p-2'>
          <div>
            <h1 className=' mb-8 font-bold text-2xl'>
              {videoDetails.snippet.title}
            </h1>
          </div>
          <div className='flex justify-around w-full'>
            <div className='w-2/3'>{videoDetails.snippet.channelTitle}</div>
            <div className='font-bold'>
              {videoDetails.statistics.likeCount} likes
            </div>
            <button className='bg-red-500 px-2 mx-2 text-white rounded-md'>
              Subscribe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleVideo;
