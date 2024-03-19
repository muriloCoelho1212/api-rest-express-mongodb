import { errorMessages } from "./errorMessages.js";
import HandlingRequestErrors from "./handlingRequestErrors.js";

class ValidationError extends HandlingRequestErrors {
    constructor(err) {
        const errMessage = Object.values(err.errors)
            .map(e => e.message)
            .join("; ");
        super(`${errorMessages.VALIDATION_ERROR} ${errMessage}`)
    }
}

export default ValidationError