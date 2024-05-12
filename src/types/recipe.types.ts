export interface IRecipe {
    id: string,
    name: string,
    image: string
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {} // в этом типе используем типы из IRecipе, но убираем типизирование id с помощью Omit