import React, { useEffect, useState } from 'react'  
import '../style/NoResultPage.css';


function NoResultPage() {

  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data => setImgUrl(data.message))
  
  }, [])

  
  
    return (
      <>
        <div className='no_result dog-title-div'>
          <h1 className='dog-title'>There is no such food... <br /> Please enjoy this random picture of a dog</h1>
      </div>
      <div className='dog-img-wrapper'>
        <div className='dog-img-div'>
            <img id='dog-img' src={imgUrl} alt="Picture of a dog" />
        </div>
      </div>
     
      </>
    
    )
  }
  

export default NoResultPage