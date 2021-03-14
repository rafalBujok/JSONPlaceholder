import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from './post.action';
import PostState, { initializeState } from './post.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  // list of posts
  on(PostActions.GetPostsAction, state => state),

  on(PostActions.SuccessGetPostsAction, (state: PostState, { payload }) => {

    return { ...state, Posts: payload };
  }),
  // one post
  on(PostActions.GetPostAction, state => state),
  on(PostActions.SuccessGetPostAction, (state: PostState, { payload }) => {
    return { ...state, Post: payload };
  }),
  // error
  on(PostActions.ErrorPostAction, (state: PostState, error: Error) => {
    console.log(error);
    return { ...state, PostError: error };
  })
);

export function PostReducer(state: PostState | undefined, action: Action) {
  return reducer(state, action);
}
