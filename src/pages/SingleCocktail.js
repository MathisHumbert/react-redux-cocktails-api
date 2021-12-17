import React from 'react';
import Loading from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleCocktail } from '../redux/action/cocktailAction';
import { useParams, Link } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { single_cocktail } = useSelector((state) => state.cocktailReducer);

  React.useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getSingleCocktail(data.drinks));
    };

    fetchData(`${url}${id}`);
  }, []);

  if (single_cocktail.length < 1) {
    return <Loading />;
  }

  console.log(single_cocktail);

  const {
    strDrinkThumb: img,
    strGlass: glass,
    strAlcoholic: alcoholic,
    strDrink: name,
    strCategory: category,
    strInstructions: instructions,
    strIngredient1: ingredient1,
    strIngredient2: ingredient2,
    strIngredient3: ingredient3,
    strIngredient4: ingredient4,
    strIngredient5: ingredient5,
  } = single_cocktail[0];

  const ingredients = [
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
  ];

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>

          <p>
            <span className="drink-data">alcoholic: </span>
            {alcoholic}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((i, index) => {
              return <span key={index}>{i}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
