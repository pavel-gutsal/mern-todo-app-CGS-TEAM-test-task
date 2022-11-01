import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup } from '../../api/users';
import { userService } from '../../servicies/user.servicies';
import { IToken } from '../../types';

type InitialState = {
  user: IToken | null;
  status:'idle' | 'failed' | 'pending' | 'fullfilled';
  error: string | null;
};

const initialState: InitialState = {
  user: null,
  status: 'idle',
  error: null,
};

type Params = {
  email: string;
  password: string;
  method: string;
}

export const registerUser = createAsyncThunk('user/registerUser', async (params: Params, thunkAPI) => {
  try {
    const { email, password, method } = params;

    if ( method === 'signup' ) {
      return await userService.signup({email, password });
    } else {
      return await userService.login({email, password });
    }
  } catch (err ) {
    if (axios.isAxiosError(err)) {
      if (
        err.response
        && err.response.data
        && err.response.data.error
      ) {
        return thunkAPI.rejectWithValue(err.response.data.error);
      } else {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.error = null;
        state.status = 'pending';
        state.user = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        state.error = null;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action ) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }else {
          state.error = 'error';
        }
        state.status = 'failed';
        state.user = null;
      });
  },
});

export const { logOutUser } = userSlice.actions;

export default userSlice.reducer;