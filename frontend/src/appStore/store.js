import { configureStore } from '@reduxjs/toolkit';
import { spacexLaunchesListSlice } from '../duck/spacexLaunches';

export const store = configureStore({
  reducer: {
    spacexLaunchesList: spacexLaunchesListSlice.reducer,
  },
});
