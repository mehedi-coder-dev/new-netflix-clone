import useBanners from "./hook/useBanners";
import requests from "./request";
import "./style/Banner.css";

const url = "https://image.tmdb.org/t/p/original";

export default function Banner() {
  const { loading, Error, result } = useBanners(requests.fetchUpcomming);

  const lessString = (string, number) => {
    return string?.length > number ? string.substr(0, number - 1) + "..." : string;
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {Error && <div>There was an error</div>}
      {!loading && !Error && (
        <div
          className="main_banner"
          style={{
            backgroundImage: `url(${url}${result.backdrop_path})`,

            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="banner">
            <h1 className="title">{result.title || result.name}</h1>
            <div className="main_button">
              <button className="button">Play</button>
              <button className="button">My List</button>
            </div>
            <h2 className="description">{lessString(result?.overview, 150)}</h2>
          </div>
          <div className="fad_button" />
        </div>
      )}
    </>
  );
}
