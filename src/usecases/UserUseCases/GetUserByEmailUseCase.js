const GetUserByEmailUseCase = async (userRepository, email) => {
    if (!email || typeof email !== 'string') {
        throw new Error('Invalid email');
    }

    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    return user;
}