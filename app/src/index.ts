import app from './app'

(async () => {
    const server = await app.init()
    console.log(`Server is now running on ${server.info.uri}`)
})()

process.on('unhandledRejection', (err: Error) => {
    console.log(err, err.stack)
    process.exit(1)
})
