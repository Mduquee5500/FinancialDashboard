import {AuthRepository} from "../domain/repositories/AuthRepository.js";
import {supabase} from "../shared/supabase.js";

export class SupabaseAuthRepository extends AuthRepository {
    async login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password:password,
        })

        if (error) {
            throw new Error(`Failed to login: ${error.message}`)
        }

        return data
    }

    async logout() {
        const { error } = await supabase.auth.signOut()

        if (error) {
            throw new Error(`Failed to logout: ${error.message}`)
        }

        return true
    }

    async getUser() {
        const {data, error} = await supabase.auth.getUser()

        if (error) {
            throw new Error(`Failed to get user: ${error.message}`)
        }

        return data
    }

    async isAuthenticated() {
        try {
            const userData = await this.getUser()
            return !!userData?.user
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            return false
        }
    }
}