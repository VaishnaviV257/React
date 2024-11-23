import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="w-64 p-4 bg-gray rounded-lg shadow-md hover:shadow-lg transition-shadow">
      
      <img
        className="w-full rounded-lg"
        src={thumbnails.medium.url}
        alt={title}
      />

      
      <h3 className="mt-2 text-lg font-semibold break-words">{title}</h3>

     <h3 className="mt-2 text-lg font-semibold break-words">{channelTitle}</h3>
      
      <p className="text-sm text-gray-600 mt-1">
        {statistics.viewCount} views
      </p>
    </div>
  );
};

export default VideoCard;
