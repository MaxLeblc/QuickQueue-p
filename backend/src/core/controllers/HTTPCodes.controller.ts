export default class HTTPCodesController {
    private logger(message: string) {
        console.log(message)
    }

    // 200 Success
    protected success(res: any, payload: any) {
        res.status(200).send(payload)
    }

    // 201 Created
    protected created(res: any, payload: any) {
        res.status(201).send(payload)
    }

    // 400 Bad Request
    protected badRequest(res: any, error: any) {
        this.logger(error)
        res.status(400).send({ error: error?.message })
    }

    // 401 Unauthorized
    protected unauthorized(res: any, error: any) {
        this.logger(error)
        res.status(401).send({ error: error?.message })
    }

    // 404 Not Found
    protected notFound(res: any, error: any) {
        this.logger(error)
        res.status(404).send({ error: error?.message })
    }

    // 500 Internal Server Error
    protected internalServerError(res: any, error: any) {
        this.logger(error)
        res.status(500).send({ error: error?.message })
    }
}
