import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState: IRecipe[] = []

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: initialState,
    reducers: {
        // toggleFavourites: (state, {payload: recipe}) => {
            // const recipe = payload лучше в параметрах
        //     const isExist = state.some(r => r.id === recipe.id)
        //     if (isExist) {
        //         const index = state.findIndex(item => item.id === recipe.id)
        //         if (index !== -1) {
        //             state.splice(index, 1) 
                    // splice(индекс, где начинаем заменять/удалять, сколько элементов удалим/заменим, на что заменяем(опционально))
        //         }
        //     } else {
        //         state.push(recipe)
        //     }
        // }
        toggleFavourites: (state, {payload: recipe}: PayloadAction<IRecipe>) => { // state - известен тип так как описан initialState, а вот payload не описан
            const isExist = state.some(r => r.id === recipe.id)
            if (isExist) {
                const index = state.findIndex(item => item.id === recipe.id)
                if (index !== -1) {
                    state.splice(index, 1) 
                }
            } else {
                state.push(recipe)
            }
        }
    }
})
export const {actions, reducer} = favouritesSlice