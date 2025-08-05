const GetCurrentUserUseCase = async (authRepository, userRepository) => {
    const currentUser = await authRepository.getUser();

    if (!currentUser?.user?.id) {
        throw new Error('User not logged in');
    }

    const user = await userRepository.getUserById(currentUser.user.id);

    if (!user) {
        throw new Error('User profile not found');
    }

    return user;
};

export { GetCurrentUserUseCase };