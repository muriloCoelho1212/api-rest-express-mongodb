import mongoose from "mongoose";
import BaseError from "../helpers/BaseError.js";
import HandlingRequestErrors from "../helpers/handlingRequestErrors.js";
import ValidationError from "../helpers/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function handlingError (err, req, res, next)  {
  console.error(err);

  if (err instanceof mongoose.Error.CastError) {
    new HandlingRequestErrors().sendRes(res)
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendRes(res)
  }
  else {
    new BaseError().sendRes(res)
  }
}

export default handlingError;