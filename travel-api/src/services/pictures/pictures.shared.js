export const picturePath = 'pictures'

export const pictureMethods = ['find', 'get', 'create', 'patch', 'remove']

export const pictureClient = (client) => {
  const connection = client.get('connection')

  client.use(picturePath, connection.service(picturePath), {
    methods: pictureMethods
  })
}
