class BaseError extends Error {
    constructor(message = "Erro interno do servidor", status = 500) {
        super()
        this.message = message
        this.status = status
    }

    sendRes(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status
        })
    }
}

export default BaseError