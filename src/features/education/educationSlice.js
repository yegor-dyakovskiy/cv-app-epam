import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEducations = createAsyncThunk(
  "education/fetchEducations",
  async () => {
    const response = await fetch("/api/educations");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
);

const educationSlice = createSlice({
  name: "education",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEducations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchEducations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default educationSlice.reducer;
