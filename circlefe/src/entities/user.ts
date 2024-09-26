export interface UserEntity {
    id: number;
    fullname: string;
    email: string;
    image: string;
    passwrod: string;
    // socialConnection
    role: string
    createdAt: Date
    updateAt: Date
}