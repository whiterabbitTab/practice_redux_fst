import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./favourites/favourites.slice";
import { userSlice } from "./user/user.slice";
import { Api } from "./api/Api";
import { createLogger } from 'redux-logger'

const logger = createLogger({ // хуй знает, для чего нужен
    collapsed: true,
})

const reducers = combineReducers({
    favourites: reducer,
    users: userSlice.reducer,
    [Api.reducerPath]: Api.reducer
}) // нужно для объединения кучи редьюсеров

export const store = configureStore({
    reducer: reducers,
    middleware: 
    (GetDefaultMiddleware) => 
        GetDefaultMiddleware().concat(Api.middleware).concat(logger)
    // (GetDefaultMiddleware) => 
    //     GetDefaultMiddleware().concat(Api.middleware) --->> без redux-logger
    // devTools: 
    // preloadedState:
})

// ### typescript

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch