import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import '../App.css';


const Playlist = (props) => {
const parms = useParams();
const [playlist,setPlaylist] = useState();



const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  }
}


  
const getPlaylistApi = ()=>{
  axios
  .get(
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${parms.id}&maxResults=50&key=AIzaSyBeRoJxa8dsDPjG789v-azHEkrbKYn_qME`
  )
  .then((res) => {
    console.log(res.data.item);
    setPlaylist(res.data.items);
  })
  .catch(() => {});
  }


  useEffect(() => {
    getPlaylistApi()
    console.log(playlist)
  }, []);


  function isEmptyObj(obj)  {
    if(obj.constructor === Object
       && Object.keys(obj).length === 0)  {
      return true;
    }
    
    return false;
  }


  return (
    <>

    {playlist &&
              playlist.map((item, idx) => {
                return (<div>
                  
{/* {  console.log(isEmptyObj(item.snippet.thumbnails),idx)} */}
                  {/* {console.log(isEmptyObj(item.snippet.thumbnails) !== true?'ㅇㅇㅇㅇㅇ':'222222',idx)}                   */}
                  <div className='sumncon'><img className='sumn' src={ isEmptyObj(item.snippet.thumbnails) !== true?item.snippet.thumbnails.medium['url']:'22222'} alt="" />
                  <YouTube className='sumn2' videoId={item.snippet.resourceId.videoId}   opts={opts} onReady={(e)=>e.target.pauseVideo()} />
                  </div>
                  
                  </div>
                );
              })}
              
    </>
  )
}

export default Playlist