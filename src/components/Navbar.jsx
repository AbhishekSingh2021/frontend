import React from "react"
import { Link } from "react-router-dom";
const Navbar =() => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mern</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
           
            <Link className="nav-link" to="/">Create Post</Link>
            <Link className="nav-link"  to="/read">All post</Link>
            
          </div>
        </div>
      </div>
    </nav>
    )}
       

export default Navbar ;