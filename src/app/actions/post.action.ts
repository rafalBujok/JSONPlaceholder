import { createAction, props } from '@ngrx/store';
import Post from '../models/post.model';

export const GetPostAction = createAction('[Post] - Get Post');

export const BeginGetPostAction = createAction('[Post] - Begin Get Post');

export const SuccessGetPostAction = createAction(
  '[Post] - Success Get Post',
  props<{ payload: Post[] }>()
);

export const ErrorPostAction = createAction('[Post] - Error', props<Error>());
