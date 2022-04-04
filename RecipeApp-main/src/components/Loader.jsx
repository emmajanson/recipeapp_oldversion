import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../media/Loading.json';
import '../style/Loader.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function Loader () {
  return (
      <div className='loader-wrapper'>
        <div className='loader'>
        <Lottie options={defaultOptions} height={420} width={420} />
        </div>
      </div>
  )
}

export default Loader;