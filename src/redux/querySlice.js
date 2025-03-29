import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk banayein
export const submitQuery = createAsyncThunk(
  'query/submitQuery',
  async (query, { rejectWithValue }) => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (query.trim() === '') {
      return rejectWithValue('Query khali hai!');
    }
    return {
      labels: ['Jan', 'Feb', 'Mar'],
      data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
    };
  }
);

const querySlice = createSlice({
  name: "query",
  initialState: {
    currentQuery: "",
    queryHistory: [],
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearHistory: (state) => {
      state.queryHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuery.pending, (state, action) => {
        state.currentQuery = action.meta.arg;
        state.queryHistory.push(action.meta.arg);
        state.loading = true;
        state.error = null;
      })
      .addCase(submitQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(submitQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearHistory } = querySlice.actions;
export default querySlice.reducer;