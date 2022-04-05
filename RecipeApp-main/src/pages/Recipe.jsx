import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import '../style/Recipe.css';
import { RiHeartLine } from "react-icons/ri";

function Recipe({favorites, setFavorites}) {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Ingredients");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);


  // ADDING FAVORITES START 
  const saveToLocalStorage = (items) => {
    localStorage.setItem('food-favorites', JSON.stringify(items))
  }

  const HandleHeartClick = (details) => {

    console.log(details);

    const newFavorites = [...favorites, details]
    setFavorites(newFavorites)
    saveToLocalStorage(newFavorites)
  }

  useEffect(() => {
  console.log(favorites)
  }, [favorites])

  // ADDING FAVORITES START 


  return (
   <div>

    <div className="summaryWrapper">
      <div className="image">
        <img className="recipeImage" src={details.image} alt="" />
      </div>
      <div className="titleAndSummary">
        <h1 className="title">{details.title}</h1>
        <p className="summary" dangerouslySetInnerHTML={{__html: details.summary}}></p>
        
        
        <RiHeartLine onClick={() => HandleHeartClick(details)} className="favorite-heart-false" />
        
        
         
        

      </div>
    </div>

    <div className="detailsWrapper">
      <div className="info">
        <div className="btn-wrapper">
          <button
            className={activeTab === "ingredients" ? "active" : ""} 
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={activeTab === "instructions" ? "active" : ""} 
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
        </div>
        {activeTab === "ingredients" && (
          <ul className="ingredients"> 
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
          ))}
          </ul>
        )}
        {activeTab === "instructions" && (
          <div className="instructions">
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
          </div>
        )}
      </div>
    </div>
   </div>
  );
}

export default Recipe;