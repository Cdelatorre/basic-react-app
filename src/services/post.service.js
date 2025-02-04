import { createHttp } from "./base.service";

const authenticatedHttp = createHttp(true);

export const getFeed = (filters) =>
  authenticatedHttp.get("/posts", { params: filters });

export const createPost = (post) => authenticatedHttp.post("/posts", post);
