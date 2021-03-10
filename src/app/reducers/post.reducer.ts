import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from '../actions/post.action';
import Post from '../models/post.model';
import PostState, { initializeState } from '../states/post.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(PostActions.GetPostAction, state => state),

  on(PostActions.SuccessGetPostAction, (state: PostState, { payload }) => {
    return { ...state, Posts: payload };
  }),
  on(PostActions.ErrorPostAction, (state: PostState, error: Error) => {
    console.log(error);
    return { ...state, PostError: error };
  })
);

export function PostReducer(state: PostState | undefined, action: Action) {
  return reducer(state, action);
}
