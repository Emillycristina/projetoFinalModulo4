import express from "express";
import CardapioModel from "../../Cardapio/models/CardapioModel.js";
import CardapioController from "../../Cardapio/controllers/CardapioController.js";

const cardapioRouter = express.Router()


cardapioRouter.get("/:id", async (req, res) => {
    try {
        const cardapio = await CardapioController.listarUmItemPorId(req);
        if (cardapio != null) {
            res.status(200).json({
                cardapio
            });
        } else {
            throw new Error(
                "Comanda não encontrada. Verifique se o ID está correto e tente novamente."
            );
        }
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});

cardapioRouter.get("/", async (req, res) => {
    try {
        const cardapio = await CardapioController.listar();
        console.log(req.params);
        res.status(200).json({
            cardapio
        });
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});

cardapioRouter.delete("/:id", async (req, res) => {
    try {
        const deletado = await CardapioController.deletar(req.params.id);
        const cardapio = await CardapioController.listar();
        res.status(200).json({
            cardapio
        });
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});

CardapioRouter.patch("/:id", async (req, res) => {
    try {
        const modificado = await CardapioController.update(req);
        const cardapio = await CardapioController.listarUmItemPorId(req);
        res.status(200).json({
            cardapio
        });
    } catch (e) {
        res.status(400).json({
            erro: e.message
        });
    }
});


export default cardapioRouter