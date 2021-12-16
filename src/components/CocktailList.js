import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../redux/action/cocktailAction';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailList = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => state.cocktailReducer);
  console.log(cocktails, loading);

  React.useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // send the data to my redux
        dispatch(getCocktails(data.drinks));
      } catch (error) {}
    };
    fetchData(url);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktailts</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          console.log(cocktail);
        })}
      </div>
    </section>
  );
};

export default CocktailList;
