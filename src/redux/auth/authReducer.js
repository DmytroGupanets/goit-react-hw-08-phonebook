import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "./authActions";

const user = createReducer(
  { name: "", email: "" },
  {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => {},
    [getCurrentUserSuccess]: (_, { payload }) => payload,
  }
);

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: (_, { payload }) => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer("", {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [registerError]: () => false,
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => false,
});

export const authReducer = combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});