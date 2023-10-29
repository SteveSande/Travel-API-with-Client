import { feathers } from "@feathersjs/feathers";
import authentication from "@feathersjs/authentication-client";
import rest from "@feathersjs/rest-client";

const restClient = rest("http://localhost:3030");
export const app = feathers();

// Setup the transport (Rest, Socket, etc.) here
app.configure(restClient.fetch(window.fetch.bind(window)));

// Available options are listed in the "Options" section
app.configure(authentication({ storage: localStorage }));
