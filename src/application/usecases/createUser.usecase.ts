import { UserRequest } from "../../@types/user";
import { UsersRepository } from "../repository/userRepository";


export class CreateUserUsecase{

    private userRepository: UsersRepository;

    constructor(userRepository?: UsersRepository){
        this.userRepository = userRepository || new UsersRepository();
    };

    async execute(data: UserRequest){
        return await this.userRepository.createUser(data)
    }
}