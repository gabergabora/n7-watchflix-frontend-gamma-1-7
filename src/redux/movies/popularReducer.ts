import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../models/movie.interface";
import { moviesActionTypes } from './movies.types';

const initialState: {
    loading: boolean;
    error: string;
    data: Movie[]
} = {
    loading: false,
    error: '',
    data: []
}

export const popularReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(moviesActionTypes.FETCH_POPULAR_MOVIES_REQUEST, (state) => {
            // "mutate" the array by calling push()
            // state.data = action.payload.data;
            state.loading = true
        })
        .addCase(moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS, (state, action: PayloadAction<Movie[]>) => {
            // "mutate" the array by calling push()
            // state.data = action.payload.data;
            state.error = ''
            state.data = action.payload;
            state.loading = false;
        })
})