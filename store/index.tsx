import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/basicInfo';
import hackerrank from './platforms/hackerrank';
import github from './platforms/github';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
  reducer: {
    user: userSlice,
    hackerrank: hackerrank,
    github: github,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;