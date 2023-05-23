import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { updateWatched } from '../reducer';
import Add from './Add';
import Search from './Search';
import List from './List';

const App = (): React.JSX.Element => {
  const { watched } = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch();

  return (
    <div>
      <Add />
      <Search/>
      <div>
        <button id='watched-btn' onClick={() => {dispatch(updateWatched(1))}}>Watched</button>
        <button id='to-watch-btn' onClick={() => {dispatch(updateWatched(0))}}>To Watch</button>
      </div>
      <List/>
    </div>
  )
}

export default App;