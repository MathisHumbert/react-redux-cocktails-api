import { GET_COCKTAILS } from '../action/actions';

const initialState = {
  cocktails: [],
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
  return state;
};

export default cocktailReducer;
