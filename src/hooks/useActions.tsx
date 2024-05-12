import { useDispatch } from 'react-redux'
import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
// import { actions } from '../store/favourites/favourites.slice.jsx';
import { favouritesSlice } from '../store/favourites/favourites.slice';
// import { getUserById } from "./user/user.actions.jsx"; ---->> плохой вариант
import * as UserActions from '../store/user/user.actions'

const rootActions = {
    ...favouritesSlice.actions,
    ...UserActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
};
