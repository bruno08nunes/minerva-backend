export async function encryptPassword(password: string) {
    // Implement your encryption logic here
    // For example, you can use bcrypt or any other hashing library
    return password; // Placeholder, replace with actual encryption
}

export async function comparePassword(password: string, hashedPassword: string) {
    // Implement your password comparison logic here
    // For example, you can use bcrypt or any other hashing library
    return password === hashedPassword; // Placeholder, replace with actual comparison
}