const GetUserByIdUseCase = async (userRepository, id) => {
    if (!id || typeof id !== 'string') {
        throw new Error('Invalid user id');
    }

    const user = await userRepository.getById(id);
    if (!user) {
        throw new Error('User not found');
    }

    return user;
}