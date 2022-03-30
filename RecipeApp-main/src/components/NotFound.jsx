import React from 'react';
import './NotFound.css'
import sadburger from './sadburger.jpg';


function NotFound () {
  return (
    <div className='Nopagefound_wrapper'>
      <div className='message_wrapper'>
        <h1>No page found!</h1>
        <p>Sorry, nothing to see here... </p>
        <p>Hurry up back to the homepage before you get really hangry! </p>
      </div>
      <div className='sadburger_wrapper'>
        <img className='sadburger_img' src={sadburger} alt="sadburger" />
      </div>
    </div>
  )
}

export default NotFound;
