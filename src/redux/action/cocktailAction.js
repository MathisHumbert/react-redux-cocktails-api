import { GET_COCKTAILS, GET_SINGLE_COCKTAIL } from './actions';

const getCocktails = (data) => {
  return (dispatch) => dispatch({ type: GET_COCKTAILS, payload: data });
};

const getSingleCocktail = (data) => {
  return (dispatch) => dispatch({ type: GET_SINGLE_COCKTAIL, payload: data });
};

export { getCocktails, getSingleCocktail };
