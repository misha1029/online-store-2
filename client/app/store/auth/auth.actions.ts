import { createAsyncThunk } from '@reduxjs/toolkit'

import { IEmailPassword } from './auth.types'
import { AuthService } from '@/services/auth/AuthService'
import { IAuthResponce } from '@/services/auth/auth-service.interface'

export const register = createAsyncThunk<IAuthResponce, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const responce = await AuthService.register(email, password)
			return responce
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponce, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const responce = await AuthService.login(email, password)
			return responce
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	AuthService.logout()
})
