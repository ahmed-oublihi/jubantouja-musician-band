import React, { useState, useEffect } from 'react';
import '../index.css'
import M from "materialize-css";

import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import bg3 from '../images/bg3.jpg'

import jubantouja from '../images/jubantouja.png'

import mem1 from '../images/mem1.jpg'
import mem2 from '../images/mem2.jpg'
import mem3 from '../images/mem3.jpg'
import mem4 from '../images/mem4.jpg'

export default function Home() {
  useEffect(() => {
    let slider = document.querySelector('.slider');
    M.Slider.init(slider, { height: 500, indicators: false, duration: 1000 });

    let parallax = document.querySelector('.parallax');
    M.Parallax.init(parallax, { height: 500});
  })

  return (
    
    <div className='center'>
      
      {/* Slider */}
      <section>
        <div className="slider">
          <ul className="slides">
            <li>
              <img src={bg1} alt='' />
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light black-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src={bg2} alt='' /> 
              <div className="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src={bg2} alt='' /> 
              <div className="caption right-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
            <h2>Discography</h2>
            <p className=''>
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={jubantouja} alt="Unsplashed background img 1" />
        </div>
      </div>

      {/* Discography */}
      <section>
        
      </section>

      {/* Latest Video */}
      <section>
        <h2 className='center'>Latest Video from Youtube Chanel</h2>
        {/* <video class="responsive-video" controls>
          <source src="movie.mp4" type="video/mp4" />
        </video> */}
        <div className="video-container">
          <iframe title='Latest Video' width="853" height="300" src="https://www.youtube.com/embed/6uZ68pBwHGc" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
      
      {/* Band Members */}
      <section>
        <div className='container'>
          <h2>Band Memebers</h2>
          <div className="row">
            <div className="col s12 m6 l3 xl3 hoverable">
              <div className="card white darken-1">
                <div className="card-content white-text">
                  <img className=' responsive-img' src={mem1} alt='' />
                  <span className="card-title center bold">Card Title</span>
                  <p className='black-text'>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <div className='center'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jubantouja" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-facebook"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/Jubantouja/" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l3 xl3 hoverable">
              <div className="card white darken-1">
                <div className="card-content white-text">
                  <img className=' responsive-img' src={mem2} alt='' />
                  <span className="card-title center bold">Card Title</span>
                  <p className='black-text'>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <div className='center'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jubantouja" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-facebook"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/Jubantouja/" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l3 xl3 hoverable">
              <div className="card white darken-1">
                <div className="card-content white-text">
                  <img className=' responsive-img' src={mem3} alt='' />
                  <span className="card-title center bold">Card Title</span>
                  <p className='black-text'>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <div className='center'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jubantouja" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-facebook"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/Jubantouja/" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l3 xl3 hoverable">
              <div className="card white darken-1">
                <div className="card-content white-text">
                  <img className=' responsive-img' src={mem4} alt='' />
                  <span className="card-title center bold">Card Title</span>
                  <p className='black-text'>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <div className='center'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jubantouja" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-facebook"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/Jubantouja/" style={{color: '#c29b1a'}}><i className="fab fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="card">
          <div className="row">
            <div className='container'>
              <div className='col s12 m8 l8'>
                <form className="white-text">
                  <h2 className="card-title">Contact Us!</h2>
                  <div className="input-field col s12">
                      <input id="name" type="text" />
                      <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-field col s12">
                      <input id="email" type="email" className="form-input" />
                      <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                  <p className="center">
                    <button className="btn btn-large waves-effect waves-light left" type="button" name="action">Send Message</button>
                  </p>
                </form>
              </div>
              <div className='col s12 m4 l4'>
                <div class="card-panel" style={{backgroundColor: '#c29b1a'}}>
                  <h3 className='card-title center white-text'>
                    I am a very simple card.
                  </h3>
                  <span class="white-text">We provide high standar clean website for your business solutions consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet .
                  </span>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}