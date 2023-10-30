import { app } from "./client";

export const queries = {
  "http://localhost:3030/pictures": app.service("pictures").find(),
};
