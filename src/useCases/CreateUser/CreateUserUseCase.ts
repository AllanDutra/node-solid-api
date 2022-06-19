// RESPONSABILIDADE ÚNICA DE CRIAR UM USUÁRIO

// DETÉM TODA A LÓGICA E REGRA DE NEGÓCIO DE COMO CRIAR UM USUÁRIO DENTRO DA APLICAÇÃO

import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository, // SÓ DEPENDE DA INTERFACE DA IMPLEMENTAÇÃO DE UM REPOSITÓRIO
        private mailProvider: IMailProvider
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "Equipe do Meu App",
                email: "equipe@meuapp.com",
            },
            subject: "Seja bem-vindo à plataforma",
            body: "<p>Você já pode fazer login em nossa plataforma.</p>"
        });
    }
}