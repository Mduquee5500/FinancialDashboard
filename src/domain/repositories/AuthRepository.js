export class AuthRepository {
    async login(email, password) {
        throw new Error('login method must be implemented')
    }

    async logout() {
        throw new Error('logout method must be implemented')
    }

    async getUser() {
        throw new Error('getUser method must be implemented')
    }

    async isAuthenticated() {
        throw new Error('isAuthenticated method must be implemented')
    }
}