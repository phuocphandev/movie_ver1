import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhim } from "services/quanLyPhim";
import { store } from "store";
import { quanLyPhimActions } from "./slice";

export const quanLyPhimThunk = createAsyncThunk(
  "quanLyPhim/quanLyPhimThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyPhim.getMovieList();
      store.dispatch(quanLyPhimActions.luuFetching(true));
      await new Promise((resolve) => setTimeout(resolve, 5000));

      return data.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
