import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { Post } from '../types';
import type { RootState } from '@/app/providers/store';
import { postsApi } from '../../api/postsApi';

const postsAdapter = createEntityAdapter<Post, number>({
  selectId: (post: Post) => post.id,
});

export const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        postsApi.endpoints.getPosts.matchFulfilled,
        (state, action) => {
          postsAdapter.setAll(state, action.payload);
        }
      )
      .addMatcher(
        postsApi.endpoints.getPostById.matchFulfilled,
        (state, action) => {
          postsAdapter.upsertOne(state, action.payload);
        }
      )
      .addMatcher(
        postsApi.endpoints.getPostsByUserId.matchFulfilled,
        (state, action) => {
          postsAdapter.upsertMany(state, action.payload);
        }
      );
  },
});

export const postSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts
);
