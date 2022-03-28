import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";
import "./Popular.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if(check){
      setPopular(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();

        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
    }
  };

  return (
      <div className="popularWrapper">
        <h3 className="popularTitle">Popular Dishes</h3>
        <Splide 
          options={{
            perPage: 5,
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
                    <p className="popularRecipeTitle">{recipe.title}</p>
                    <img className="popularRecipeImage" src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
  );
}


const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`;

export default Popular;
