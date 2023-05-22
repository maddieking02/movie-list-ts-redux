import React from 'react';
import { useAppSelector } from '../hooks';
import Entry from './Entry';

const List = (): React.JSX.Element => {
  const { filtered } = useAppSelector(state => state.movies)

  return (
    <div>
      {filtered.length > 0 ? filtered.map((entry, idx) => {
        return <Entry entry={entry} key={idx}></Entry>
      }) : <p>'no movie by that name found'</p>}
    </div>
  )
};

export default List;