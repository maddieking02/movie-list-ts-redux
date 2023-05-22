import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import Search from './Search';
import List from './List';

const App = (): React.JSX.Element => {
  // const movie = useAppSelector(state => state.movies)
  // useAppDispatch();
  // console.log('movie', movie)
  return (
    <div>
      <Search/>
      <List/>
    </div>
  )
}

export default App;