import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { updateQuery, updateFilter } from '../reducer';

const Search = (): React.JSX.Element => {
  const { query, movies } = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch();

  const handleSearch = (): void => {
    let temp: any[] = [];
    movies.map((movie) => {
      if (movie.title.toLowerCase().includes(query.toLowerCase())) {
        temp.push(movie);
      }
    })
    dispatch(updateFilter(temp))
    dispatch(updateQuery(''));
  }

  // async (): Promise<void>

  return (
    <div>
      <input id="search-input" type="text" placeholder="Search..." value={query} onChange={(e) => dispatch(updateQuery(e.target.value))}></input>
      <button id="search-button" onClick={() => handleSearch()}>Go</button>
    </div>
  )
}

export default Search;