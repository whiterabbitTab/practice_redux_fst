// чисто RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../types/recipe.types'

const API_URL = 'http://localhost:4200/recipes' // В Next js он куда то выносится

export const Api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'], // по этому тегу будем переобновлять наше состояние
    // когда приходят данные с сервака, с его помощью мы обновляем страницу 
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        // getRecipes: builder.query({
        //     query: () => '/', // / - потому что http://localhost:4200/recipes уже является корневым
        //     query: () => '?_sort=id,_order=desc', --->> с сортировкой
        //     providesTags: () => 
        //     [{
        //         type: 'Recipe'
        //     }]
        // }),
        // # typescript
        getRecipes: builder.query<IRecipe[], null>({ // null - так как никаких аргументов не приходит, а так писали бы тип аргумента
            query: () => '?_sort=id,_order=desc',
            providesTags: () => 
            [{
                type: 'Recipe'
            }]
        }),
    })
    // ВМЕСТО ПРОПИСЫВАНИЯ ЗДЕСЬ КУЧИ ENDPOINT, ЛУЧШЕ КАЖДЫЙ ОТДЕЛЬНЫЙ АПИ ВЫНОСИМ В ОТДЕЛЬНЫЙ ФАЙЛ ( ВЕДЬ МОЖЕТ БЫТЬ КУЧА АПИ, К ПРИМЕРУ: АПИ ДЛЯ ПОЛЬЗОВВАТЕЛЕЙ, ДЛЯ РЕЦЕПТОВ И ТД, КОРОЧЕ КУЧА АПИ)
})

export const { useGetRecipesQuery } = Api // название разное у каждой созданной апишки