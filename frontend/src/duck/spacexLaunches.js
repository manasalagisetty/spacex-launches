import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
    error: null,
    filter: 'all',
    spacexLaunches: [],
};

export const getSpacexLaunches = createAsyncThunk(
    'launches/listLaunches',
    async function() {
        try {
            const res = await fetch('https://api.spacexdata.com/v3/launches');
            if(!res.ok) throw new Error('Problem getting Launches data');
            const data = await res.json();
            return data;
        } catch (err){
            return err;
        }
    },
);

export const spacexLaunchesListSlice = createSlice({
    name: 'spacexLaunchesListSlice',
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [getSpacexLaunches.fulfilled]: (state, { payload }) => {
            if (payload.length > 0) {
                state.spacexLaunches = payload;
                state.error = null;
                state.isLoading = false;
            } else {
                state.error = payload.message;
                state.isLoading = false;
            }
        },
    },
});

export const getSpacexLaunchState = state => state.spacexLaunchesList;