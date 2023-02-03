import React from 'react'
import { Badge, Form } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

function VideoInfo({ x, today, getDate }) {
    return (
      <div className="video">
        <Link to={"/video/" + x.id}>
          <img src={x.snippet.thumbnails.medium["url"]} alt="" />
          <h3>
            {x.snippet.title}{" "}
            {Number(x.statistics.viewCount) > 500000 ? (
              <Badge bg="danger">추-천</Badge>
            ) : null}{" "}
            {getDate(x.snippet["publishedAt"], today) ? (
              <Badge bg="primary">New</Badge>
            ) : null}
          </h3>
        </Link>
        <p className="viewCount">
          조회수 : {Number(x.statistics.viewCount).toLocaleString("en-US")} 회
        </p>
        <p className="upload">
          업로드 : {x.snippet["publishedAt"].substring(0, 10)}{" "}
        </p>
        {/* <UpBtn /> */}
      </div>
    );
  }


export default VideoInfo