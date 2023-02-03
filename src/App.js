import './App.css';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Routes,Route, Router } from "react-router-dom";
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Playlistcard from './component/Playlistcard';
import SearchBar from './component/SearchBar';
import SearchPages from './pages/SearchPages';
import VideoPlayer from "./component/VideoPlayer";


function App() {
  
  let [search, setSearch] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const updateChange = 
  useCallback(
    (e) => {
      let data = e.target.value;
      let filterData = playlist.filter((i) => i.snippet.title.includes(data));
      if (data.length === 0) {
        filterData = [];
      }
      setSearch(filterData);
      console.log((search))
    },
    [search]
  );
  
useEffect(() => {
  axios
  .get(
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCSLrpBAzr-ROVGHQ5EmxnUg&maxResults=50&key=AIzaSyBeRoJxa8dsDPjG789v-azHEkrbKYn_qME"
    )
    .then((res) => {
      // console.log(res);
      setPlaylist(res.data.items);
    })
    .catch(() => {});
  }, []);
  if(playlist)
  return (
    <div className="App">
{/* <iframe style={ {position:'fixed' , width:'100%', height:'100vh' } }id="player29" class="player" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Ready Berry Go!│메가MGC커피 딸기 신메뉴 출시!🍓" width="100%" height="360" src="https://www.youtube.com/embed/{mainvid[vididx]}?autoplay=1&amp;playsinline=1&amp;loop=1&amp;rel=0&amp;mute=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0&amp;loop=1&playlist=9VYx2IxjZPg&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.mega-mgccoffee.com&amp;widgetid=2"></iframe> */}
{/* <iframe style={ {position:'fixed' , width:'100%', height:'100vh' } }id="player29" class="player" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Ready Berry Go!│메가MGC커피 딸기 신메뉴 출시!🍓" width="100%" height="360" src="https://www.youtube.com/embed/{mainvid[vididx]}?autoplay=1&amp;playsinline=1&amp;loop=1&amp;rel=0&amp;mute=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0&amp;loop=1&playlist=9VYx2IxjZPg&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.mega-mgccoffee.com&amp;widgetid=2"></iframe>
<iframe style={ {position:'fixed' , width:'100%', height:'100vh' } }id="player29" class="player" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Ready Berry Go!│메가MGC커피 딸기 신메뉴 출시!🍓" width="100%" height="360" src="https://www.youtube.com/embed/{mainvid[vididx]}?autoplay=1"></iframe> */}
    <SearchBar
          updateChange={updateChange}
          setSearch={setSearch}
          search={search}
    />

    <Routes>
      <Route path='/' element={<Home playlist={playlist}/>}></Route> {/* '/' 기본주소 */}
      <Route path='/:id' element={<Playlist/>}></Route> {/* '/:id'  */}
      <Route path='/search/:id' element={<SearchPages search={search}/>}></Route>
      <Route path="/video/:videoID" element={<VideoPlayer/>}></Route>
    </Routes>

    {/* <iframe width="560" height="315" src={a} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{/* {<iframe src={abc[vididx]}></iframe>} */}
{/* {console.log(`<iframe src=https://www.youtube.com/embed/${abc[vididx]}?autoplay=1/>`)}; */}

          
        </div>
  );
}



export default App;

