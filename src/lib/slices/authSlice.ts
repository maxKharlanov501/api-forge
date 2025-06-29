import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: false
  },
  reducers: {
    login: (state) => {
      state.value = true
    },
    logout: (state) => {
      state.value = false
    }
  }
})

export const { login, logout } = authSlice.actions

export type AuthState = ReturnType<typeof authSlice.getInitialState>

export default authSlice.reducer