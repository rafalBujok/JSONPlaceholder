import Post from "../models/post.model";

export default class PostState {
  Posts: Array<Post>;
  PostError: Error;
}

export const initializeState = (): PostState => {
  return { Posts: Array<Post>(), PostError: null };
};
