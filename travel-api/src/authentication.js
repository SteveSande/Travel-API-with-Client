// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'

import { oauth, OAuthStrategy } from '@feathersjs/authentication-oauth'

export const authentication = (app) => {
  const authentication = new AuthenticationService(app)

  authentication.register('jwt', new JWTStrategy())
  authentication.register('google', new OAuthStrategy())

  app.use('authentication', authentication)
  app.configure(oauth())
}
