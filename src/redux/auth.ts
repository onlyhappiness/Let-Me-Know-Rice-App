import {createSlice} from '@reduxjs/toolkit';
import api from '../api';

export const setToken = (token: any) => {
  if (!token) {
    delete api.defaults.headers.common.Authorization;
  }
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// export const me = createAsyncThunk('auth/login', async () => {

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    principal: undefined,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload;
    },
    clearPrincipal: state => {
      state.principal = undefined;
    },
  },
});

export const {setPrincipal, clearPrincipal} = authSlice.actions;

export default authSlice.reducer;
