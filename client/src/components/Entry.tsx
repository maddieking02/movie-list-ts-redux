import React from 'react';
import { Movie, updateMovies, updateFilter } from '../reducer'; // issue assigning type alias to param
import { useAppSelector, useAppDispatch } from '../hooks';

interface MovieEntry {
  entry: Movie;
}

const Entry = ({ entry }: MovieEntry): React.JSX.Element => {
  const { movies } = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch();

  const handleToggle = (): void => {
    let copy = movies.map(movie => {
      if (movie.title.toLowerCase() === entry.title.toLowerCase()) {
        return {
          ...movie,
          watched: movie.watched === 0 ? 1 : 0
        };
      }
      return movie;
    });
    dispatch(updateMovies(copy));
    dispatch(updateFilter(copy));
  };


  return (
    <div>
      <div>
        {entry.title}
        <button value={entry.watched} onClick={(e) => handleToggle(e.target as HTMLInputElement)}>{entry.watched === 0 ? 'To Watch' : 'Watched'}</button>
      </div>
    </div>
  )
};

export default Entry;