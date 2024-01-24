import "dotenv/config.js";
import app from "./src/app.js";

app.listen(process.env.PORT, () => {
  console.log(`Servidor ouvindo na porta ${process.env.PORT}`);
});