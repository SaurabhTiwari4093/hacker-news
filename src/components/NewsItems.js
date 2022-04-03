import React from 'react';
import moment from 'moment';
import "./NewsItems.css"


export default function NewsItems(props) {
  
    return (
        <div className={`card shadow card-${props.mode} bg-${props.mode} h-100`} style={{width:"90%"}}>
        <span className="position-absolute shadow badge rounded bg-danger p-1 m-1" style={{right:0}}>
        {props.author}
        </span>
          <img src={props.urlToImage} className="card-img-top" alt="..." style={{height:"250px"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.description}
            </p>
            <p className="text-secondary">{moment(props.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <a href={props.url} className="btn btn-primary btn-sm shadow" target="_blank">
              Read More
            </a>
          </div>
        </div>
    );
}
