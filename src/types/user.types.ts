export type IUser = {
    id: number,
    name: string
}

export type TypeInitialUserState = {
    isLoading: boolean,
    error: string | null,
    user: IUser
}