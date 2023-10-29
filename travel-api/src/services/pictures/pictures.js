// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  pictureDataValidator,
  picturePatchValidator,
  pictureQueryValidator,
  pictureResolver,
  pictureExternalResolver,
  pictureDataResolver,
  picturePatchResolver,
  pictureQueryResolver
} from './pictures.schema.js'
import { PictureService, getOptions } from './pictures.class.js'
import { picturePath, pictureMethods } from './pictures.shared.js'

export * from './pictures.class.js'
export * from './pictures.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const picture = (app) => {
  // Register our service on the Feathers application
  app.use(picturePath, new PictureService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: pictureMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(picturePath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(pictureExternalResolver), schemaHooks.resolveResult(pictureResolver)],
      create: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')]
    },
    before: {
      all: [schemaHooks.validateQuery(pictureQueryValidator), schemaHooks.resolveQuery(pictureQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(pictureDataValidator), schemaHooks.resolveData(pictureDataResolver)],
      patch: [schemaHooks.validateData(picturePatchValidator), schemaHooks.resolveData(picturePatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
