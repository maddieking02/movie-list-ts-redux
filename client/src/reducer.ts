import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface MovieState {
  movies: Array<{title: string, watched: 0 | 1}>,
}

const initialState: MovieState = {
  movies: [
    {title: 'Mean Girls', watched: 0},
    {title: 'Hackers', watched: 0},
    {title: 'The Grey', watched: 0},
    {title: 'Sunshine', watched: 0},
    {title: 'Ex Machina', watched: 0},
  ],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { updateMovies } = movieSlice.actions;
export default movieSlice.reducer;