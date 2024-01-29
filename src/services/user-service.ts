import bcrypt from 'bcrypt';
import { User } from "@prisma/client";
import { CreateUserParams } from 'protocols';
import { duplicatedEmailError } from 'errors';
import { userRepository } from 'repositories';

export async function createUser({ email, password }: CreateUserParams): Promise<User> {

    await validateUniqueEmail(email);

    const hashedPassword = await bcrypt.hash(password, 12);
    return userRepository.create({
        email,
        password: hashedPassword,
    });
}

async function validateUniqueEmail(email: string) {
    const user = await userRepository.findUserByEmail(email);
    if (user) {
        throw duplicatedEmailError();
    }
}

export const userService = {
    createUser,
};