import { Request, Response } from "express";
import { AuthUsecase } from "../usecases/auth.usecase";


export class AuthController {
    constructor() {};

    async handle(req: Request, res: Response){
        const useCase = new AuthUsecase();

        try{
            const { token, userName } = await useCase.execute(req.body);
            return res.status(200).send({ message: 'Autenticado com sucesso.', success: true, token, userName})

        } catch (error) {
            return res.status(401).send({ message: (error as Error).message, success: false})
        }
    }

}