import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import '../style/Cuisine.css';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=23`
        );
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type)
    },[params.type]);

  return (
    <div className='cuisineWrapper searchedGrid'>
      <Grid 
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          {cuisine.map((item) => {
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

export default Cuisine;