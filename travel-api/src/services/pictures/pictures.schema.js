// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const pictureSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    picture: Type.String(),
    destination: Type.Optional(Type.String()),
    region: Type.Optional(Type.String()),
    country: Type.Optional(Type.String()),
    subdivision: Type.Optional(Type.String()),
    tags: Type.Optional(Type.Array(Type.String()))
  },
  { $id: 'Picture', additionalProperties: false }
)
export const pictureValidator = getValidator(pictureSchema, dataValidator)
export const pictureResolver = resolve({})

export const pictureExternalResolver = resolve({})

// Schema for creating new entries
export const pictureDataSchema = Type.Pick(
  pictureSchema,
  ['picture', 'destination', 'region', 'country', 'subdivision', 'tags'],
  {
    $id: 'PictureData'
  }
)
export const pictureDataValidator = getValidator(pictureDataSchema, dataValidator)
export const pictureDataResolver = resolve({})

// Schema for updating existing entries
export const picturePatchSchema = Type.Partial(pictureSchema, {
  $id: 'PicturePatch'
})
export const picturePatchValidator = getValidator(picturePatchSchema, dataValidator)
export const picturePatchResolver = resolve({})

// Schema for allowed query properties
export const pictureQueryProperties = Type.Pick(pictureSchema, [
  '_id',
  'picture',
  'destination',
  'region',
  'country',
  'subdivision',
  'tags'
])
export const pictureQuerySchema = Type.Intersect(
  [
    querySyntax(pictureQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const pictureQueryValidator = getValidator(pictureQuerySchema, queryValidator)
export const pictureQueryResolver = resolve({})
