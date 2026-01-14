import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { User } from '../types';
import type { RootState } from '@/app/providers/store';
import { usersApi } from '../../api/usersApi';

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

export const userSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        usersApi.endpoints.getUsers.matchFulfilled,
        (state, action) => {
          usersAdapter.setAll(state, action.payload);
        }
      )
      .addMatcher(
        usersApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
          usersAdapter.upsertOne(state, action.payload);
        }
      );
  },
});

export const userSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.users
);
