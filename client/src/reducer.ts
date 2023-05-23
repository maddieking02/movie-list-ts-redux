import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DeepWriteable<T> = { -readonly [P in keyof T]: T[P] };

export interface Movie {
  title: string,
  watched: 0 | 1
}

const initialState: {
  movies: DeepWriteable<Movie>[];
  filtered: DeepWriteable<Movie>[];
  query: string;
  add: string;
  watched: 0 | 1;
} = {
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
    },
    updateWatched: (state, action) => {
      state.watched = action.payload;
    }
  },
});

export const { updateMovies, updateFilter, updateQuery, updateAdd, updateWatched } = movieSlice.actions;
export default movieSlice.reducer;