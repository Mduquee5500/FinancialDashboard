const CreateUserUseCase = async (userRepository, userData) =>{
    if (!userData || typeof userData !== 'object') {
        throw new Error('Invalid user data');
    }

    const user = await userRepository.createUser(userData);
    if (!user) {
        throw new Error('User not created');
    }

    return user;
};