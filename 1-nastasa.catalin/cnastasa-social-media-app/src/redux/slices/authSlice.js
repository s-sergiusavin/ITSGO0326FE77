import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    email: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.email = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.email = null;
        },
        toggleLogin(state) {
            state.isAuthenticated = !state.isAuthenticated;

            if (!state.isAuthenticated) {
                state.email = null;
            }
        }
    }
});

export const { login, logout, toggleLogin } = authSlice.actions;

export const authReducer = authSlice.reducer;
