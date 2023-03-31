import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api';
import {loginInfo} from '../api/apis/auth';

// api 요청시 header 토큰 추가
export const setToken = (token: any) => {
  if (!token) {
    delete api.defaults.headers.common.Authorization;
  }
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// 로그인 성공 시 로그인 정보 요청
export const me = createAsyncThunk('auth/login', () => {
  return loginInfo();
});

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
  extraReducers: {
    [me.fulfilled.type]: (state, action) => {
      if (action.payload === 400) {
        state.principal = undefined;
      } else {
        state.principal = action.payload;
      }
    },
  },
});

export const {setPrincipal, clearPrincipal} = authSlice.actions;

export default authSlice.reducer;
