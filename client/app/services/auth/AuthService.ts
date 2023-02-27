import { axiosClassic } from '@/api/api'

import { IAuthResponce } from './auth-service.interface'
import { removeTokenFromStorage, saveTokenToStorage } from './auth.helper'

export const AuthService = {
	async login(email: string, password: string) {
		const responce = await axiosClassic.post<IAuthResponce>('/auth/login', {
			email,
			password
		})
		if (responce.data.accessToken) {
			await saveTokenToStorage(responce.data.accessToken)
		}
		return responce.data
	},
	async register(email: string, password: string) {
		const responce = await axiosClassic.post<IAuthResponce>('/auth/register', {
			email,
			password
		})
		if (responce.data.accessToken) {
			await saveTokenToStorage(responce.data.accessToken)
		}
		return responce.data
	},
	async logout() {
		await removeTokenFromStorage()
	}
}
