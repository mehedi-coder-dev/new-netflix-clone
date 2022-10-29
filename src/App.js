import "./App.css";
import Videos from "./component/Videos";
import requests from "./component/request";
import Banner from "./component/Banner";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Videos title="NETFLIX ORIGINALS" fetching={requests.fetchNetflixOrginals} input />
      <Videos title="Trending Now" fetching={requests.fetchTrending} />
      <Videos title="Top Rated" fetching={requests.fetchTopRated} />
      <Videos title="Action Movies" fetching={requests.fetchActionMovies} />
      <Videos title="Commedy Movies" fetching={requests.fetchComedyMovies} />
      <Videos title="Horror Movies" fetching={requests.fetchHorrorMovies} />
      <Videos title="Romance Movies" fetching={requests.fetchRomanceMovies} />
      <Videos title="Documentaries" fetching={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
