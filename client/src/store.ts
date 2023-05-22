import { configureStore } from "@reduxjs/toolkit";
import movies from './reducer';

export const store = configureStore({
  reducer: {
    movies,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch