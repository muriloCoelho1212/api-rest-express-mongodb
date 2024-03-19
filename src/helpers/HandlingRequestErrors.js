import BaseError from "./BaseError.js";
import { errorMessages } from "./errorMessages.js";

class HandlingRequestErrors extends BaseError {
    constructor(message = errorMessages.ERROR_FORMAT_ID) {
        super(message, 400)
    }
}

export default HandlingRequestErrors