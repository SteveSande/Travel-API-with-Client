// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'

import { oauth, OAuthStrategy } from '@feathersjs/authentication-oauth'

class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile) {
    // this will set 'googleId'
    const baseData = await super.getEntityData(profile);
    debugger
    // this will grab the picture and email address of the Google profile
    return {
      ...baseData,
      email: profile.email
    };
  }
}

export const authentication = (app) => {
  const authentication = new AuthenticationService(app)

  authentication.register('jwt', new JWTStrategy())
  authentication.register('google', new GoogleStrategy())

  app.use('authentication', authentication)
  app.configure(oauth())
}
