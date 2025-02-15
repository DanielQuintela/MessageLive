import { Request, Response, Router } from "express";
import { CreateRoomController } from "../application/controllers/createRoom.controller";
import { AuthController } from "../application/controllers/auth.controller";
import { CreateUserController } from "../application/controllers/createUser.controller";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Olá, se está vendo isso então o servidor está rodando!");
});

router.post('/createRoom', (req: Request, res: Response) => {
    new CreateRoomController().handle(req, res);
});

router.post('/login', (req: Request, res: Response) => {
    new AuthController().handle(req, res);
});

router.post('/register', (req: Request, res: Response) => {
    new CreateUserController().handle(req, res);
});

export {router};