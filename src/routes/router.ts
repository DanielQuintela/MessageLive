import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Olá, se está vendo isso então o servidor está rodando!");
});

router.post('/createRoom', (Req: Request, res: Response) => {
    
})

export {router};