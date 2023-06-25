// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from './slices/user'

import { userApi } from './services/user'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer:{
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
   
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});
