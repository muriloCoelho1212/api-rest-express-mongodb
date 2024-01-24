import mongoose from "mongoose";
import { errorMessages } from "../helpers/errorMessages.js";

// eslint-disable-next-line no-unused-vars
function handlingError (err, req, res, next)  {
  console.error(err);

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).send(errorMessages.ERROR_FORMAT_ID);
  } else if (err instanceof mongoose.Error.ValidationError) {
    const errMessage = Object.values(err.errors)
      .map(e => e.message)
      .join("; ");
    res.status(400).send({ message: `${errorMessages.VALIDATION_ERROR} ${errMessage}`});
  }
  else {
    res.status(500).send(errorMessages.INTERNAL_SERVER_ERROR);
  }
}

export default handlingError;