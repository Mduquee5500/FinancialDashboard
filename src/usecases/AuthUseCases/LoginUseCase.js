const LoginUseCase = async (authRepository, userRepository, email, password) => {
    const verifyCredentials = await authRepository.login(email, password)

    if (verifyCredentials) {
        const user = await userRepository.getUserById(verifyCredentials.user.id)
        return user
    } else {
        throw new Error('Invalid credentials')
    }
}

export { LoginUseCase }