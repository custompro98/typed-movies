import Hapi from '@hapi/hapi'
import config from './config'

const init = async (): Promise<Hapi.Server> => {
    const server = Hapi.server({
        host: config.web.host,
        port: config.web.port,
    })

    await server.start()

    return server
}

export default { init }
