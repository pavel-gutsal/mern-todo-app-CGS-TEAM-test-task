import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { todoService } from '../../servicies/todo.servicies';
import { IUpdates, IPost, ITodo } from '../../types';

type InitialState = {
  todos: ITodo[];
  status:'idle' | 'failed' | 'pending' | 'fullfilled';
  error: string | null;
};

const initialState: InitialState = {
  todos: [],
  status: 'idle',
  error: null,
};

interface Data {
  post: IPost;
  token: string;
}

export const createTodoThunk = createAsyncThunk('todos/createTodoThunk', async (data: Data, thunkAPI) => {
  try {
    const { token, post } = data;
    return await todoService.postTodo(token, post)
  } catch (err) {
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

export const downloadTodoThunk = createAsyncThunk(
  'todos/downloadTodoThunk',
  async (token: string, thunkAPI) => {
  try {
    return await todoService.download(token);
  } catch (err) {
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

type deleteData = {
  token: string;
  id: string;
}

export const deleteTodoThunk = createAsyncThunk(
  'todos/deleteTodoThunk',
  async (data: deleteData, thunkAPI) => {
    const { token, id } = data;
  try {
    return await todoService.deleteTodo(id, token);
  } catch (err) {
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

type ToggleData = {
  updates: IUpdates;
  token: string;
  id: string;
}

export const editTodoThunk = createAsyncThunk(
  'todos/editTodoThunk',
  async (data: ToggleData, thunkAPI) => {
    const { token, id, updates } = data;
  try {
    return await todoService.updateTodo(id, token, updates);
  } catch (err) {
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

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    logOut: (state) => {
      state.todos = [];
      state.error = null;
      state.status = 'idle';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createTodoThunk.pending, (state) => {
        state.error = null;
        state.status = 'pending';
      })
      .addCase(createTodoThunk.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        state.error = null;
        state.todos = [ ...state.todos, action.payload ];
      })
      .addCase(createTodoThunk.rejected, (state, action ) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }else {
          state.error = 'error';
        }
        state.status = 'failed';
      })
      .addCase(downloadTodoThunk.pending, (state) => {
        state.error = null;
        state.status = 'pending';
      })
      .addCase(downloadTodoThunk.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        state.error = null;
        state.todos = [ ...action.payload ];
      })
      .addCase(downloadTodoThunk.rejected, (state, action ) => {
        if (typeof action.payload === 'string') {
          state.error = action.payload;
        }else {
          state.error = 'error';
        }
        state.status = 'failed';
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action ) => {
        state.status = 'fullfilled';
        state.error = null;
        state.todos = state.todos.filter(el => el._id !== action.payload._id);
      })
      .addCase(editTodoThunk.fulfilled, (state, action ) => {
        state.status = 'fullfilled';
        state.error = null;
        state.todos = state.todos.map(el => {
            if (el._id === action.payload._id) {
              return action.payload
            }
            return el;
          });
      });
  }},
);

export const { logOut } = todosSlice.actions;

export default todosSlice.reducer;