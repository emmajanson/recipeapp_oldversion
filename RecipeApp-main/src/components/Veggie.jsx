import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";
import '../style/Veggie.css';
import Loader from "./Loader";

function Veggie({ mobileMode, windowLoad }) {

  const [veggie, setVeggie] = useState([]);
  const [veggieIsLoading, setVeggieIsLoading] = useState(true);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');

    if(check){
      setVeggie(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        );
        const data = await api.json();

        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
    }

    setTimeout(() => setVeggieIsLoading(false), 2000);
  };

  return veggieIsLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="veggieWrapper">
        <h3 className="veggieTitle">Veggie Dishes</h3>
        <Splide 
          options={{
            perPage: mobileMode || windowLoad ? 2 : 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {veggie.map((recipe) => {
            return(
              <SplideSlide key={recipe.id}>
                <div className="veggieCard">
                  <Link to={'/recipe/' + recipe.id}>
                    <p className="veggieRecipeTitle">{recipe.title}</p>
                    <img className="veggieRecipeImage" src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
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

export default Veggie;
