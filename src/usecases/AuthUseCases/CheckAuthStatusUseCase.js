const CheckAuthStatusUseCase = async (authRepository) => {
    return await authRepository.isAuthenticated();
};