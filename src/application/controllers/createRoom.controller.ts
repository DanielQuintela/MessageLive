import { Request, Response } from "express";
import { CreateRoomUseCase } from "../usecases/createRoom.usecase";


export class CreateRoomController {
    constructor() {};

    async handle(req: Request, res: Response){
        const useCase = new CreateRoomUseCase();

        try{
            const result = await useCase.execute(req.body);
            return res.status(201).send({ message: 'Sala criada !', success: true, data: result})

        } catch (error) {
            return res.status(401).send({ message: (error as Error).message, success: false})
        }
    }
}