export type CreateUserDTO = {
    fullname: string,
    email: string,
    password: string,
}

export type UpdateUserDTO = Omit<CreateUserDTO, "email">
