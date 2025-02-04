import { createHttp } from "./base.service";

const authenticatedHttp = createHttp(true);

export const likePost = (postId) =>
  authenticatedHttp.post(`/posts/${postId}/like`);

export const likeList = () => authenticatedHttp.get("/likes");
