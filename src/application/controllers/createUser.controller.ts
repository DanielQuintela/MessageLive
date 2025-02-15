import { Request, Response } from "express";
import { CreateUserUsecase } from "../usecases/createUser.usecase";

export class CreateUserController{
    constructor() {};

      async handle(req: Request, res: Response){
        const useCase = new CreateUserUsecase();

        try{
            const newUser = await useCase.execute(req.body);
            return res.status(201).send({ message: 'Usuário criado !', success: true, data: newUser})

        } catch (error) {
            return res.status(401).send({ message: (error as Error).message, success: false})
        }
      }
}