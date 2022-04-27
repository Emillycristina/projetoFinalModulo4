import express from "express";
import estoqueRouter from "./src/routers/Estoque/app.js";

const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`A API está funcionando com sucesso na porta ${port}`)
})


app.use("/api/estoque", estoqueRouter)