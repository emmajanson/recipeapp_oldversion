import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';




function favorites({ favorites }) {
      // Använder exakt samma kod som 'return' i cuisine förrutom att man .map'ar favorites istället


      return (
        <div className='cuisineWrapper searchedGrid'>
          <Grid 
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
              {favorites.map((item) => {
                  return (
                      <div className='cuisineCard searchedCard' key={item.id}>
                        <Link className='cuisineLink' to={'/recipe/' + item.id}>
                          <img className='cuisineImage' src={item.image} alt="" />
                          <h4 className='cuisineItemTitle'>{item.title}</h4>
                        </Link>
                      </div>
                  );
              })}
          </Grid>
        </div>
      )
}

const Grid = styled(motion.div)`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

export default favorites



