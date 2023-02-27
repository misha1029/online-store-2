export interface IUser {
	id: number
	name: string
	email: string
}

export interface IAuthResponce {
	user: IUser
	accessToken: string
}
