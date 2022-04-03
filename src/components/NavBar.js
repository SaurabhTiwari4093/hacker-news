import React from "react";
import {Link} from "react-router-dom";

export default function NavBar(props){
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{textShadow: "0.5px 0.5px 0.5px #2222226b"}}>
            <b>NEWS 24-7</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/business">
                Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/entertainment">
                Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/general">
                General
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/health">
                Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/science">
                Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/sports">
                Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/technology">
                Technology
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  );
}
   
