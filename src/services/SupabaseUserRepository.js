// services/SupabaseUserRepository.js
import { UserRepository } from '../domain/repositories/UserRepository'
import { supabase } from '../shared/supabase'

export class SupabaseUserRepository extends UserRepository {
   async getUserById(id) {
       const { data, error } = await supabase
           .from('users')
           .select('*')
           .eq('id', id)
           .single()
       
       if (error) {
           throw new Error(`Failed to get user by ID: ${error.message}`)
       }
       
       return data
   }

   async getUserByEmail(email) {
       const { data, error } = await supabase
           .from('users')
           .select('*')
           .eq('email', email)
           .single()
       
       if (error) {
           throw new Error(`Failed to get user by Email: ${error.message}`)
       }
       
       return data
   }

   async createUser(userData) {
       const { data, error } = await supabase
           .from('users')
           .insert(userData)
           .select()
           .single()
       
       if (error) {
           throw new Error(`Failed to create user: ${error.message}`)
       }
       
       return data
   }

   async updateUser(id, userData) {
       const { data, error } = await supabase
           .from('users')
           .update(userData)
           .eq('id', id)
           .select()
           .single()
       
       if (error) {
           throw new Error(`Failed to update user: ${error.message}`)
       }
       
       return data
   }
}