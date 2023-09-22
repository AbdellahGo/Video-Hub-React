import { configureStore } from "@reduxjs/toolkit";
import { videosApi } from "./services/videosApi";


export default configureStore({
    reducer: {
        [videosApi.reducerPath]: videosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(videosApi.middleware)
})