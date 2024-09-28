import { ThreadEntity } from "./thread";

export interface UserEntity {
    id: number;
    fullname: string;
    username: string;
    email: string;
    image: string;
    passwrod: string;
    bio: string,
    thread: ThreadEntity,
    profile: string,
    bgImage: string,
    role: string
    createdAt: Date
    updateAt: Date
}