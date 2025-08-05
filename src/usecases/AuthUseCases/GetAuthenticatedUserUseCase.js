const GetAuthenticatedUserUseCase = async (authRepository) => {
    const result = await authRepository.getUser()

    if (!result?.user) {
        throw new Error('User not logged in')
    }

    return result;
}