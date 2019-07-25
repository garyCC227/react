import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p className="ui description"> {video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
