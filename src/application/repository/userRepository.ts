import { UserRequest } from "../../@types/user";
import { prismaClient } from "../../infra/database/prismaClient";


export class UsersRepository {
    async findByName(userName: string){
        return await prismaClient.user.findFirst({
            where: {
                name: userName
            }
        })
    };

    async findUserByEmail(email: string){
        return await prismaClient.user.findUnique({
            where: {
                email: email
            }
        })
    }

    async createUser(data: UserRequest){

        return await prismaClient.user.create({
            data: {
                email:      data.email,
                password:   data.password,
                name:       data.name
            }
        })
    };

    async updateUser(data: UserRequest){

        return await prismaClient.user.update({
            where: {
                email: data.email
            },
            data: {
                ...data
            }
        })
    };

    async deleteUser(userId: string){
        await prismaClient.user.delete({
            where: {
                id: userId
            }
        })

        return 'Deleted'
    };
}