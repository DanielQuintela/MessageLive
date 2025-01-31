import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Olá, se está vendo isso então o servidor está rodando!");
});

export {router};