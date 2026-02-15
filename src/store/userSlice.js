import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginThunk = createAsyncThunk(
  "user/login",
  async ({ email, password, remember }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        {
          email,
          password,
          rememberMe: remember || false,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);


const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

const initialState = {
  user: storedUser || null,
  token: storedToken || null,
  loading: false,
  error: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;

        const userData = {
          name: action.payload.name,
          email: action.payload.email,
          role_id: action.payload.role_id,
        };

        state.user = userData;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", action.payload.token);
      })

      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
