import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../redux/action/cocktailAction';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailList = () => {
  const dispatch = useDispatch();
  const { cocktails, loading, inputValue } = useSelector(
    (state) => state.cocktailReducer
  );

  React.useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // send the data to my redux
        dispatch(getCocktails(data.drinks));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(`${url}${inputValue}`);
  }, [inputValue, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktails) {
    return <h1>No Cocktails Matched Your Search Criteria</h1>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktailts</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Cocktail cocktail={cocktail} key={cocktail.idDrink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
