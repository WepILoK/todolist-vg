export interface IAuthState {
    login: string,
    password: string
    isAuth: boolean
}

export type IAuthAction = Omit<IAuthState, "isAuth">