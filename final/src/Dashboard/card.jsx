import React from "react";
import "E:/repos/szakdolgozat/final/src/App.css"
import {
    MDBCarousel,
    MDBCarouselItem
  } from 'mdb-react-ui-kit';

function Card(props){
    return (
        <MDBCarousel showControls fade>
          <MDBCarouselItem
            className='test'
            itemId={1}
            src="https://store-images.s-microsoft.com/image/apps.31378.14440169033196048.33ec04e1-f2d4-46ed-a05b-03b332738f93.8032cfe7-683a-4be1-8b4c-9da7dc14c2b3?q=90&w=1293&h=571"
            alt='...'
            
          >
            <h5>Hangman</h5>
            <p>Can you guess what's the word we were thinking of? Try it out!</p>
          </MDBCarouselItem>
    
          <MDBCarouselItem
            className='test d-block'
            itemId={2}
            src='https://m.media-amazon.com/images/I/71XB4z0uO3L._AC_UF894,1000_QL80_.jpg'
            alt='...'
          >
            <h5>Memory Card Game</h5>
            <p>You have the memory of a genius? Let's test it out!</p>
          </MDBCarouselItem>
    
          <MDBCarouselItem
            className='test'
            itemId={3}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
            alt='...'
          >
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselItem>
        </MDBCarousel>
      );
}

export default Card;