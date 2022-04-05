import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";
import "../style/Popular.css";
import Loader from "./Loader";
import { FiClock } from 'react-icons/fi';

function Popular({ mobileMode, windowLoad }) {

  const [popular, setPopular] = useState([]);
  const [popularIsLoading, setPopularIsLoading] = useState(true);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const check = localStorage.getItem("popular");

    if(check){
      setPopular(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
        );
        const data = await api.json();


        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
    }
    
    setTimeout(() => setPopularIsLoading(false), 2000);
  };

  return popularIsLoading ? (
    <Loader />
  ) : (
      <div className="popularWrapper">
        <h3 className="popularTitle">Popular Dishes</h3>
        <Splide 
          options={{
            perPage: mobileMode || windowLoad ? 2 : 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "20px",
          }}
        >
          {popular.map((recipe) => {
            return(
              <SplideSlide key={recipe.id}>
                <div className="popularCard">
                  <Link to={'/recipe/' + recipe.id}>
                    <img className="popularRecipeImage" src={recipe.image} alt={recipe.title} />
                    <div className="popularRecipeTextWrapper">
                      <h1 className="popularRecipeTitle">{recipe.title.length < 20 ? `${recipe.title}` : 
                      `${recipe.title.substring(0, 25)}...` }</h1>
                      <div className="popularTimeWrapper">
                        <FiClock className="timeIcon"/>
                        <p className="popularRecipeTime">{recipe.readyInMinutes + " min"}</p>
                      </div>
                    </div>
                  </Link>    
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
  );
}

export default Popular;
