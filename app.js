import express from "express";
import estoqueRouter from "./src/routers/Estoque/app.js";
import ClientesRouter from "./src/routers/Clientes/app.js";
import cardapioRouter from "./src/routers/Cardapio/app.js";

const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`A API está funcionando com sucesso na porta ${port}`)
})


app.use("/api/", estoqueRouter)
app.use("/api/clientes", ClientesRouter)
app.use("/api/", cardapioRouter)

