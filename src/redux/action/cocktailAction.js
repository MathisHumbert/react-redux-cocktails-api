import { GET_COCKTAILS } from './actions';

const getCocktails = (data) => {
  return (dispatch) => dispatch({ type: GET_COCKTAILS, payload: data });
};

export { getCocktails };
