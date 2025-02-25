import { AuthRequest } from "../../@types/auth";
import { comparePassword } from "../../services/encryptedService";
import { UsersRepository } from "../repository/userRepository";
import jwt from "jsonwebtoken";

export class AuthUsecase {
    private userRepository: UsersRepository;

    constructor(userRepository?: UsersRepository){
        this.userRepository = userRepository || new UsersRepository();
    };

    async execute(data: AuthRequest){
        const { email, password } = data
        const user = await this.userRepository.findUserByEmail(email);
        if(!user) throw new Error('Usuário não encontrado');
        
        const passwordMatch =  await comparePassword(password, user.password);
        if (!passwordMatch) throw new Error("Senha incorreta");

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: "4h" });
        const userName = user.name
        return {token, userName}
    }

}