import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  name: string;
  country: string;
  gender: string;
  dob: string;
  profilePic: string;
  // profile links

}

/**
 * Default state object with initial values.
 */
const initialState: UserState = {
  name: '',
  email: '',
  country: '',
  gender: '',
  dob: '',
  profilePic: '',

} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.name>
    ) => {
      state.name = action.payload;
    },
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
    setUserInfo: (
      state: Draft<typeof initialState>,
      action: PayloadAction<UserState>
    ) => {
      state = action.payload
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setName, setEmail, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
