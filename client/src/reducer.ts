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
  query: string | '';
  add: string;
  watched: 0 | 1;
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
  query: '',
  add: '',
  watched: 1 /* 0 false, 1 true -- default to movies that have not been watched */
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
    },
    updateAdd: (state, action) => {
      state.add = action.payload;
    }
  },
});

export const { updateMovies, updateFilter, updateQuery, updateAdd } = movieSlice.actions;
export default movieSlice.reducer;