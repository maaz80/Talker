import { create } from 'zustand'
import { axiosInstance } from '../lib/axios.js'
import toast from 'react-hot-toast'


export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const response = await axiosInstance.get('/auth/check')
            set({ authUser: response.data })
        } catch (error) {
            set({ authUser: null })
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true })
        try {
            const response = await axiosInstance.post('/auth/signup', data)
            set({ authUser: response.data })
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
        } finally {
            set({ isSigningUp: false })
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('/auth/logout')
            set({ authUser: null })
            toast.success("Logged out successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true })
        try {
            const response = await axiosInstance.post('/auth/login', data)
            set({ authUser: response.data })
            toast.success('Logged in successfully')
        } catch (error) {
            toast.error('Logged In Failed')
            console.log(`Error in login: ${error.response.data.message}`);
        } finally {
            set({ isLoggingIn: false })
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true })
        try {
            const response = await axiosInstance.put('/auth/update-profile', data)
            set({ authUser: response.data })
            toast.success('Profile updated successfully')
        } catch (error) {
            toast.error('Profile update failed')
            console.log(`Error in updating profile: ${error.response.data.message}`);
        } finally {
            set({ isUpdatingProfile: false })
        }
    }
}))