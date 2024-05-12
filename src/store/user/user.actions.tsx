import { createAsyncThunk } from "@reduxjs/toolkit"
import { IUser } from "../../types/user.types"

// const fetchUserById = userId => 
//     new Promise((resolve) => 
//         setTimeout(() => resolve({id: 1,  
//         name: 'Max'}), 1000)
//     )

// export const getUserById = createAsyncThunk('users/by-id', async (userId, thunkApi) => {
//     try {
//         const response = await fetchUserById(userId) 
//         return response
//     } catch (error) {
//         thunkApi.rejectWithValue(error)
//     }
// })

const fetchUserById = (userId: number): Promise<IUser> => // возвращает promise с user
    new Promise((resolve) => 
        setTimeout(() => resolve({id: userId,  
        name: 'Max'}), 1000)
    )

export const getUserById = createAsyncThunk<IUser, number>('users/by-id', async (userId, thunkApi) => { // < что будет отдаваться, что будет приниматья>
    try {
        const response = await fetchUserById(userId)
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})


// асинхронный action