import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  title: string,
  watched: 0 | 1
}

interface MovieStates {
  movies: Array<Movie>,
  filtered: any[],
}

interface AllStates extends MovieStates {
  query: string | ''
}

const initialState: AllStates = {
  movies: [
    {title: 'Mean Girls', watched: 0},
    {title: 'Hackers', watched: 0},
    {title: 'The Grey', watched: 0},
    {title: 'Sunshine', watched: 0},
    {title: 'Ex Machina', watched: 0},
  ],
  filtered: [
    {title: 'Mean Girls', watched: 0},
    {title: 'Hackers', watched: 0},
    {title: 'The Grey', watched: 0},
    {title: 'Sunshine', watched: 0},
    {title: 'Ex Machina', watched: 0},
  ],
  query: ''
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateMovies: (state, action) => {
      state.movies = action.payload;
    },
    updateFilter: (state, action) => {
      state.filtered = action.payload;
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    }
  },
});

export const { updateMovies, updateFilter, updateQuery } = movieSlice.actions;
export default movieSlice.reducer;