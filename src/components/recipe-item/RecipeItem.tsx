import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useFavourites } from '../../hooks/useFavourites'
import { IRecipe } from '../../types/recipe.types';
// import { actions } from '../../store/favourites/favourites.slice';

type RecipeType = {
    recipe: IRecipe
}

export const RecipeItem = ({ recipe }: RecipeType) => {

    // const { favourites } = useSelector(state => state)
    // const favourites = useSelector(state => state.favourites) --->> в отдельный хук лучше вынести
    // const dispatch = useDispatch()
    const favourites = useFavourites()
    const { toggleFavourites } = useActions()
    const isExist = favourites.some(r => r.id === recipe.id)

    return(
        <div className='mx-8 my-2 p-1 flex items-center flex-col bg-gray-400 rounded-lg w-80'>
            <img src={recipe.image} alt="" />
            <h2 className='text-white text-2xl font-bold my-3'>{recipe.name}</h2>
            {/* <button onClick={() => dispatch(actions.toggleFavourites(recipe))} className='transition-all duration-300 hover:bg-pink-600 text-center bg-pink-500 font-bold my-1 p-3 rounded-xl'>{isExist ? 'Remove from ' : 'Add to '}favourites</button> */}
            {/* actions.toggleFavourites(recipe) - recipe это payload */}
            <button onClick={() => toggleFavourites(recipe)} className='transition-all duration-300 hover:bg-pink-600 text-center bg-pink-500 font-bold my-1 p-3 rounded-xl'>{isExist ? 'Remove from ' : 'Add to '}favourites</button>
        </div>
    );
};
