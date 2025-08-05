const UpdateUserUseCase = async (userRepository, id, userData) => {
    if (!id || typeof id !== 'string') {
        throw new Error('Invalid user id');
    }

    if (!userData || typeof userData !== 'object') {
        throw new Error('Invalid user data');
    }

    const user = await userRepository.updateUser(id, userData);
    if (!user) {
        throw new Error('User not found or update failed');
    }

    return user;
}