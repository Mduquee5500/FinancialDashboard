const LogoutUseCase = async (authRepository) => {
    const success = await authRepository.logout()
    return success;
}