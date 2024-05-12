import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserById } from './user.actions';
import { IUser } from '../../types/user.types';
import { TypeInitialUserState } from '../../types/user.types';

const initialState: TypeInitialUserState = {
    isLoading: false,
    error: null,
    user: {} as IUser
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}, // не нужны
    extraReducers: builder => { // extraReducers --->> потому что используем асинхронные запросы
        builder.addCase(getUserById.pending, state => {
            state.isLoading = true
        })
        .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => { // payloadAction<что приходит>
            state.isLoading = false
            state.user = action.payload
        })
        .addCase(getUserById.rejected, (state, action: any) => { // ошибка, так что похуй, просто any, их трудно типизировать, зависит от сервака
            state.isLoading = false
            state.error = action.payload.error
            state.user = {} as IUser
        })
    }
})