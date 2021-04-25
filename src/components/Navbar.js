import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'
import M from "materialize-css";

export default function Navbar() {
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  })
  return (
    <div>

      {/* Navbar */}
      <section>
        <nav className="nav-extended navbar-fixed my-navbar">
          <div className='container'>
            <div className="nav-wrapper">
              <a href="http://localhost:3000/" className="brand-logo" style={{color: '#c29b1a'}}>JUBANTOUJA</a>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="" className="right hide-on-med-and-up show-on-large my-nav-links">
                <li><a target="_blank" href="https://www.facebook.com/jubantouja" style={{color: '#c29b1a'}}><i className="fab fa-facebook"></i></a></li>
                <li><a target="_blank" href="https://www.instagram.com/Jubantouja/" style={{color: '#c29b1a'}}><i className="fab fa-instagram"></i></a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UClOa8F5xrIMP5Um206ghwBQ" style={{color: '#c29b1a'}}><i className="fab fa-youtube"></i></a></li>
                <li><a target="_blank" href="https://open.spotify.com/artist/7m05rEUUQiViUHo1IPHz8x?fbclid=IwAR3D-stvf9MwWQoX2Y1T78NnmGu4664ZhlWfZlSOm0Nd93YIVCSy_Bn4WSg" style={{color: '#c29b1a'}}><i className="fab fa-spotify"></i></a></li>
              </ul>
              <ul id="nav-mobile" className="right hide-on-med-and-up show-on-large my-nav-links">
                <li><a href="sass.html" style={{color: '#c29b1a'}}>About</a></li>
                <li><a href="badges.html" style={{color: '#c29b1a'}}>Discography</a></li>
                <li><a href="collapsible.html" style={{color: '#c29b1a'}}>Band Memebers</a></li>
                <li><a href="collapsible.html" style={{color: '#c29b1a'}}>Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav center" id="slide-out" style={{backgroundColor: '#0d0a09'}}>
          <h3 className='center'>
            <a href="#" className="brand-logo center" style={{color: '#c29b1a'}}>JUBANTOUJA</a>
          </h3>
          
          <li><a href="sass.html" style={{color: '#c29b1a'}}>About</a></li>
          <li><a href="badges.html" style={{color: '#c29b1a'}}>Discography</a></li>
          <li><a href="collapsible.html" style={{color: '#c29b1a'}}>Band Memebers</a></li>
          <li><a href="collapsible.html" style={{color: '#c29b1a'}}>Contact</a></li>

          <hr />

          <h4 className=''>Follow Us! 👇</h4>

          <li className="icons">
            <div className='center'>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jubantouja" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-facebook"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/Jubantouja/" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-instagram"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UClOa8F5xrIMP5Um206ghwBQ" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-youtube"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/7m05rEUUQiViUHo1IPHz8x?fbclid=IwAR3D-stvf9MwWQoX2Y1T78NnmGu4664ZhlWfZlSOm0Nd93YIVCSy_Bn4WSg" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-spotify"></i></a>
            </div>
          </li>
        </ul>

      </section>

      {/*  Section: Slider  */}

      {/* <section className="slider">
        <ul className="slides">
          <li>
            <img src="images/jubantouja.jpg" alt="" />
            <div className="caption center-align">
              <h2>Take Your Dream Vacation</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
              <a href="#" className="btn btn-large">Learn More</a>
            </div>
          </li>
        </ul>
      </section> */}


    </div>

    


  )
}