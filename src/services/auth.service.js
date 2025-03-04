import { createHttp } from "./base.service";

const http = createHttp();
const authenticatedHttp = createHttp(true);

export const loginService = (credentials) => http.post("/login", credentials);

export const getCurrentUserService = () => authenticatedHttp.get("/me");
