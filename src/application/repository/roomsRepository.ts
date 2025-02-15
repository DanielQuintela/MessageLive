import { RoomCreation } from "../../@types/room";
import { prismaClient } from "../../infra/database/prismaClient";

export class RoomsRepository {
    async findByName(name: string){
        return await prismaClient.room.findFirst({
            where: {
                name_room: name,
            }
        })
    };

    async createRoom(data: RoomCreation){
        
        return await prismaClient.room.create({
            data: {
                name_room:  data.name_room,
                creator:    data.creator
            }
        })
    };

    async deleteRoom(roomId: string){
        await prismaClient.room.delete({
            where: {
                id_room: roomId
            }
        })

        return 'Deleted'
    };


}