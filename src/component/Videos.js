import movieTrailer from "movie-trailer";
import React, { useState } from "react";
import YouTube from "react-youtube";
import useMovie from "./hook/useMovie";
import "./style/Video.css";

const url = "https://image.tmdb.org/t/p/original";

const Videos = ({ title, fetching, input }) => {
  const { loading, Error, result } = useMovie(fetching);
  const [trailer, setTrailer] = useState();

  const opts = {
    height: "550px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handaler = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      async function getTrailer() {
        const response = await movieTrailer(movie?.title);
        const url = new URLSearchParams(new URL(response).search);

        setTrailer(url.get("v"));
      }
      getTrailer();
    }
  };

  return (
    <div className="main">
      <h1 className="img_title">{title}</h1>
      {loading && <div>Loading...</div>}
      {Error && <div>There was an Error!</div>}

      <div className="img_div">
        {result.map((img) => (
          <img
            onClick={() => handaler(img)}
            className={`main_img ${input && "img"}`}
            src={`${url}${input ? img.poster_path : img.backdrop_path}`}
            alt={img.title}
            key={Math.random()}
          />
        ))}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts} />}
    </div>
  );
};

export default Videos;
