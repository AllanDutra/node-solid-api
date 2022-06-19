// É UM CONTRATO QUE DEFINE OS MÉTODOS E RETORNOS DO MEU REPOSITÓRIO, SEM DEPENDER DA IMPLEMENTAÇÃO DESTES.

import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}