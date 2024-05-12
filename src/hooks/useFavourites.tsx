// import { useSelector } from 'react-redux' для просто jsx
import { useTypedSelector } from "./useTypedSelector"


export const useFavourites = () => {
    // return useSelector(state => state.favourites)
    // return useSelector(state => state) // тогда придется деструктуризировать --->> const { favourites } = useFavourites();
    const { favourites } = useTypedSelector(state => state)
    return favourites
}