import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function App() {

 // const key = process.env.REACT_APP_YOUTUBE_API_KEY;
 // const CHANNEL_ID = "UCUj6rrhMTR9pipbAWBAMvUQ";
 // const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}`;

  const [playlist, setPlaylist] = useState([]);

useEffect(() => {
  axios
  .get(
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UComP_epzeKzvBX156r6pm1Q&maxResults=50&key=AIzaSyBeRoJxa8dsDPjG789v-azHEkrbKYn_qME"
    )
    .then((res) => {
      console.log(res);
      setPlaylist(res.data.items);
    })
    .catch(() => {});

    
  }, []);


  return (
    <div className="App">
          <div className="container">
            {playlist &&
              playlist.map((i, idx) => {
                return (
                  <div className="playlist" key={idx}>
                    <img src={i.snippet.thumbnails.high["url"]} alt="" />
                    <Link to={"/playlist/" + i.id}>
                      <h1>{i.snippet.localized["title"]}</h1>
                    </Link>
                    <p>{i.snippet.localized["description"]}</p>
                  </div>
                );
              })}
              
          </div>
        </div>
  );
}


export default App;
