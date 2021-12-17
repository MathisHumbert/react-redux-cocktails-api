import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInput } from '../redux/action/cocktailAction';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { inputValue } = useSelector((state) => state.cocktailReducer);

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={inputValue}
            onChange={(e) => dispatch(handleInput(e.target.value))}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
