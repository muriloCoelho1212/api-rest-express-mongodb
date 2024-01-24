import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function handlingError (err, req, res, next)  {
  console.error(err);

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).send("Erro: Formato do Id incorreto");
  } else {
    res.status(500).send(`Erro: Não foi possível carregar o autor, ${err.message}`);
  }
}

export default handlingError;