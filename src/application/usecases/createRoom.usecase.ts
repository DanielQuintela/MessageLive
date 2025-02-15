import { RoomCreation } from "../../@types/room";
import { RoomsRepository } from "../repository/roomsRepository";


export class CreateRoomUseCase{
    private roomsRepository: RoomsRepository;

    constructor(roomsRepository?: RoomsRepository){
        this.roomsRepository = roomsRepository || new RoomsRepository();
    };

    async execute(data: RoomCreation){
        const roomExists = await this.roomsRepository.findByName(data.name_room);
        if(roomExists) throw Error('Sala já cadastrada!');

        const createRoom = await this.roomsRepository.createRoom(data);

        return createRoom;
    }
}