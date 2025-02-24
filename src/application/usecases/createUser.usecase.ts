import { UserRequest } from "../../@types/user";
import { UsersRepository } from "../repository/userRepository";


export class CreateUserUsecase{

    private userRepository: UsersRepository;

    constructor(userRepository?: UsersRepository){
        this.userRepository = userRepository || new UsersRepository();
    };

    async execute(data: UserRequest){
        console.log('Criando usuário: ', data.email);
        const user = await this.userRepository.findUserByEmail(data.email);
        if(user) throw Error('Usuário já cadastrado!');
        
        return await this.userRepository.createUser(data)
    }
}