import React from 'react';
import moment from 'moment';
import "./NewsItems.css"


export default function NewsItems(props) {

  const dateFormat=(time)=>{
    const resultDate=moment(time.slice(0, 19) + "Z").format("dddd, MMMM Do YYYY, h:mm:ss a")
    return resultDate;
  }

  return (
    <div className={`card shadow card-${props.mode} bg-${props.mode} h-100`} style={{ width: "90%" }}>
      <span className="position-absolute shadow badge rounded bg-danger p-1 m-1" style={{ right: 0 }}>
        {props.author}
      </span>
      <div className="card-body mt-3">
        <h5 className="card-title">{props.title}</h5>
        <p className="text-secondary">{dateFormat(props.time)}</p>
        <a href={props.url} className="btn btn-primary btn-sm shadow">
          Read More
        </a>
      </div>
    </div>
  );
}
