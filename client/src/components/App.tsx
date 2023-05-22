import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';

const App = (): React.JSX.Element => {
  const movie = useAppSelector(state => state.movies)
  useAppDispatch();
  console.log('movie', movie)
  return (
    <div>Hello World</div>
  )
}

export default App;