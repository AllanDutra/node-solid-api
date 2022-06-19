// DTO - DATA TRANSFER OBJECT

// USADO QUANDO VAI TRANSFERIR UM OBJETO DE UMA CAMADA PARA A OUTRA

export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
}