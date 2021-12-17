import { GET_COCKTAILS, GET_SINGLE_COCKTAIL } from '../action/actions';

const initialState = {
  cocktails: [],
  single_cocktail: [],
  loading: true,
  error: false,
};

const cocktailReducer = (state = initialState, action) => {
  if (action.type === GET_COCKTAILS) {
    return {
      ...state,
      cocktails: action.payload,
      loading: false,
      error: false,
    };
  }
  if (action.type === GET_SINGLE_COCKTAIL) {
    return { ...state, single_cocktail: action.payload };
  }
  return state;
};

export default cocktailReducer;
