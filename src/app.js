import express from "express";
import manipuladorErro from "./midleware/manipuladorDeErros.js";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
routes(app);

app.use(manipuladorErro);

export default app