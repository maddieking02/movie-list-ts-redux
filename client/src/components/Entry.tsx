import React from 'react';
import { Movie } from '../reducer' // issue assigning type alias to param
import { useAppSelector, useAppDispatch } from '../hooks';

interface MovieEntry {
  entry: Movie;
}

const Entry = ({ entry }: MovieEntry): React.JSX.Element => {
  const { filtered } = useAppSelector(state => state.movies)

  return (
    <div>
      <div>{entry.title}</div>
    </div>
  )
};

export default Entry;