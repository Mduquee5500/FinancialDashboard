export class UserRepository {
    async getUserById(id) {
        throw new Error('getUserById method must be implemented')
    }

    async getUserByEmail(email) {
        throw new Error('getUserByEmail method must be implemented')
    }

    async createUser(userData) {
        throw new Error('createUser method must be implemented')
    }

    async updateUser(id, userData) {
        throw new Error('updateUser method must be implemented')
    }
}

