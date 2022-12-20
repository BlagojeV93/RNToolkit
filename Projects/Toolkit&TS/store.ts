import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userListSlice from './userListSlice';

const rootReducer = combineReducers({
  userList: userListSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export default store;
