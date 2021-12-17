import { GET_COCKTAILS, GET_SINGLE_COCKTAIL, HANDLE_INPUT } from './actions';

const getCocktails = (data) => {
  return (dispatch) => dispatch({ type: GET_COCKTAILS, payload: data });
};

const getSingleCocktail = (data) => {
  return (dispatch) => dispatch({ type: GET_SINGLE_COCKTAIL, payload: data });
};

const handleInput = (data) => {
  return (dispatch) => dispatch({ type: HANDLE_INPUT, payload: data });
};

export { getCocktails, getSingleCocktail, handleInput };
