import { hash, compare } from "bcrypt";

export async function encryptPassword(password: string) {
    return await hash(password, 10);
}

export async function comparePassword(password: string, hashedPassword: string) {
    return await compare(password, hashedPassword);
}