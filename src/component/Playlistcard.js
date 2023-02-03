import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Playlistcard = (props) => {

    const navigate = useNavigate();
    
    // console.log(props)
    // console.log(props.item)
    // console.log(props.idx)
    
    const goPlayList = (itid) => {
        navigate(`/${itid}`);
    }
    
    return (
    <div onClick={ ()=>goPlayList(props.item.id) }>
        <div className="playlist" key={props.idx}>
    <img src={props.item.snippet.thumbnails.high["url"]} alt="" />
      <h1>{props.item.snippet.localized["title"]}</h1>
    <p>{props.item.snippet.localized["description"]}</p>
     </div>
    </div>
  )
}

export default Playlistcard