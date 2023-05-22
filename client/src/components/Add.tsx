import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { updateAdd, updateFilter, updateMovies } from '../reducer';
import { Movie } from '../reducer';

const Add = (): React.JSX.Element => {
  const { add, movies } = useAppSelector(state => state.movies)
  const dispatch = useAppDispatch();

  const handleAdd = (): void => {
    console.log('this is added value', add)
    // add new movie to filtered state, with a default value of 0 for watched
    let newMovie: Movie = {title: add, watched: 0};
    dispatch(updateMovies([newMovie, ...movies]))
    dispatch(updateFilter([newMovie, ...movies]))
    dispatch(updateAdd(''))
  }

  return (
    <div>
      <input id='add-input' type='text' value={add} placeholder={'Add movie title here'} onChange={(e) => {dispatch(updateAdd(e.target.value))}}></input>
      <button id='add-button' onClick={() => {handleAdd()}}>Add</button>
    </div>
  )
}

export default Add;