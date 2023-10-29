import { picture } from './pictures/pictures.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(picture)

  app.configure(user)

  // All services will be registered here
}
