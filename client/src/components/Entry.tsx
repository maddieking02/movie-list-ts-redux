import React from 'react';
import { Movie, updateMovies, updateFilter } from '../reducer'; // issue assigning type alias to param
import { useAppSelector, useAppDispatch } from '../hooks';

interface MovieEntry {
  entry: Movie;
}

const Entry = ({ entry }: MovieEntry): React.JSX.Element => {
  const { movies } = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch();

  const handleToggle = (e): void => {
    let copy = [...movies];
    copy.map(movieCopy => {
      if (movieCopy.title.toLowerCase() === entry.title.toLowerCase()) {
        movieCopy.watched === 0 ? movieCopy.watched = 1 : movieCopy.watched = 0;
      }
    })
    dispatch(updateMovies(copy));
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