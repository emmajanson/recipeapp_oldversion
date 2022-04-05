import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import '../style/Searched.css';
import Loader from '../components/Loader';
import NoResultPage from './NoResultPage';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [searchIsLoading, setSearchIsLoading] = useState(true);


    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        setTimeout(() => setSearchIsLoading(false), 2000);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);



  return searchIsLoading ?  (
    <Loader />):
    searchedRecipes.length <= 0 ?
    (
        <NoResultPage />
    ):

  (
    <div className='searchedWrapper'>
    <div className='searchedGrid'>
      {searchedRecipes.map((item) => {
          return (
              <div className='searchedCard' key={item.id}>
                <Link className='searchedLink' to={'/recipe/' + item.id}>
                  <img className='searchedImage' src={item.image} alt="" />
                  <h1 className="searchedItemTitle">{item.title.length < 20 ? `${item.title}` : 
                    `${item.title.substring(0, 25)}...` }</h1>
                </Link>
              </div>
          );
      })}
    </div>
  </div>
  )
   
}

export default Searched;