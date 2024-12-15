import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const LoadingSLice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setLoading } = LoadingSLice.actions;
export default LoadingSLice.reducer;
