import React from 'react'
import Playlistcard from '../component/Playlistcard';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Link, Routes,Route } from "react-router-dom";
import Playlist from '../pages/Playlist';


const Home = (props) => {

      // const mainvid = ['U3ASj1L6_sY','YQHsXMglC9A','fk4BbF7B29w'];
  const abc = [
    "https://www.youtube.com/embed/U3ASj1L6_sY?autoplay=1&amp;playsinline=1&amp;loop=1&amp;rel=0&amp;mute=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0&amp;loop=1&playlist=U3ASj1L6_sY&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.mega-mgccoffee.com&amp;widgetid=2",
    "https://www.youtube.com/embed/YQHsXMglC9A?autoplay=1&amp;playsinline=1&amp;loop=1&amp;rel=0&amp;mute=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0&amp;loop=1&playlist=YQHsXMglC9A&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.mega-mgccoffee.com&amp;widgetid=2",
    "https://www.youtube.com/embed/fk4BbF7B29w?autoplay=1&amp;playsinline=1&amp;loop=1&amp;rel=0&amp;mute=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0&amp;loop=1&playlist=fk4BbF7B29w&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.mega-mgccoffee.com&amp;widgetid=2"
  ];
  let vididx = Math.floor(Math.random()*3);

  let a = "https://www.youtube.com/embed/YQHsXMglC9A";


  console.log(props.playlist)

  // console.log(Math.floor(Math.random()*3))


 // const key = process.env.REACT_APP_YOUTUBE_API_KEY;
 // const CHANNEL_ID = "UCUj6rrhMTR9pipbAWBAMvUQ";
 // const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}`;

// useEffect(() => {
//   axios
//   .get(
//     "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCSLrpBAzr-ROVGHQ5EmxnUg&maxResults=50&key=AIzaSyBeRoJxa8dsDPjG789v-azHEkrbKYn_qME"
//     )
//     .then((res) => {
//       // console.log(res);
//       setPlaylist(res.data.items);
//     })
//     .catch(() => {});
//   }, []);

    // 검색어 자동 완성 구현 함수
    
  return (
    
        <div className="container">
            
            {props.playlist &&
              props.playlist.map((item, idx) => {
                return (
                  <Playlistcard item={item} idx={idx}/> // 프롭스로 넘겨줄값 
                );
              })}
              
          </div>
  )
}

export default Home