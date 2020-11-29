import Hapi from '@hapi/hapi'

import app from '../app'
import config from '../config'

describe('init', () => {
    it('instantiates a server object', async () => {
        jest.spyOn(Hapi, 'server')
            .mockImplementationOnce(() => ({
                route: () => {},
                start: () => {},
            } as unknown as Hapi.Server))

        await app.init()

        expect(Hapi.server).toHaveBeenCalledWith({
            host: config.web.host,
            port: config.web.port,
        })
    })

    it('starts the server', async () => {
        const startMock = jest.fn()
        jest.spyOn(Hapi, 'server')
            .mockImplementationOnce(() => ({
                route: () => {},
                start: startMock,
            } as unknown as Hapi.Server))

        await app.init()

        expect(startMock).toHaveBeenCalled()
    })

    it('mounts the routes', async () => {
        const mountMock = jest.fn()

        jest.spyOn(Hapi, 'server')
            .mockImplementationOnce(() => ({
                route: mountMock,
                start: () => {},
            } as unknown as Hapi.Server))

        await app.init()

        expect(mountMock).toHaveBeenCalled()
    })
})
