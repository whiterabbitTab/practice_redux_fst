// СЮДА НАХУЙ КАЖДОЕ ОТДЕЛЬНОЕ АПИ, КУДА И ПРОПИШЕМ endpoints
import { IRecipeData } from "../../types/recipe.types"
import { Api } from "./Api"

export const recipeApi = Api.injectEndpoints({
    endpoints: builder => ({
        // createRecipe: builder.mutation({ // mutation - для создания, изменения, удаления
        //     query: (recipe) => ({
        //         body: recipe,
        //         url: '/',
        //         method: 'POST',
        //     }),
        //     invalidatesTags: () => 
        //     [{
        //         type: 'Recipe'
        //     }]
        // }),
        // # typescript
        createRecipe: builder.mutation<null, IRecipeData>({ // <то, что приходит в ответе, а второе - queryArgument>
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST',
            }),
            invalidatesTags: () => 
            [{
                type: 'Recipe'
            }]
        }),
    }),
})

export const { useCreateRecipeMutation } = recipeApi