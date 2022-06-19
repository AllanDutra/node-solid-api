import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, "id">, id?: string) {
        Object.assign(this, props); // passa tudo de props para this.

        if (!id) {
            this.id = uuid(); // não deixar a criação de id para o banco de dados!
        }
    }
}