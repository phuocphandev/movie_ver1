import { createSlice } from "@reduxjs/toolkit";
import { quanLyPhimThunk } from "./thunk";
import { Movie } from "types/QuanLyPhim";

type QuanLyPhimInitialState = {
  movieList: Movie[];
  isFetchingMovieList: boolean;
  isFetchingMovieList2:boolean;
};
const initialState: QuanLyPhimInitialState = {
  movieList: [],
  isFetchingMovieList: true,
  isFetchingMovieList2:true,
};

export const quanLyPhimSlice = createSlice({
  name: "quanLyPhim",
  initialState,
  reducers: {
    luuFetching:(state,actions)=>{
      state.isFetchingMovieList2= actions.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(quanLyPhimThunk.pending, (state) => {
        state.isFetchingMovieList = true;
      })
      .addCase(quanLyPhimThunk.rejected, (state, _) => {
        state.isFetchingMovieList = false;
      })
      .addCase(quanLyPhimThunk.fulfilled, (state, { payload }) => {
        state.movieList = payload;
        state.isFetchingMovieList = false;
        state.isFetchingMovieList2 =false;
      });
  },
});

export const { reducer: quanLyPhimReducers, actions: quanLyPhimActions } =
  quanLyPhimSlice;
