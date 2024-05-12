import React, { useState, FormEvent } from 'react';
import styles from './CreateRecipe.module.scss'
import { useCreateRecipeMutation } from '../../store/api/recipe.api';
import { IRecipeData } from '../../types/recipe.types';

// const defaultValue = {
//     name: '',
//     image: ''
// }
// # typescript
const defaultValue:IRecipeData = {
    name: '',
    image: ''
}

export const CreateRecipe = () => {
    const [recipe, setRecipe] = useState(defaultValue)

    const [createRecipe] = useCreateRecipeMutation()

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     createRecipe(recipe).then(() => {
    //         setRecipe(defaultValue)
    //     })
    // }
    // # typescript
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })
    }

    // Rappie Pie
    // https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg

    return(
        <div className='px-9'>
            <form className={styles.create_recipe} onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='Name' value={recipe.name} onChange={(event) => setRecipe({
                        ...recipe,
                        name: event.target.value
                    })} />
                </label>
                <label>
                    <input type="text" placeholder='Image' value={recipe.image} onChange={(event) => setRecipe({
                        ...recipe,
                        image: event.target.value
                    })} />
                </label>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
};