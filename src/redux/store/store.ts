import { configureStore} from "@reduxjs/toolkit";
import { pokemonApi } from "../Api/pokemonApi";
import searchReducer from '../Slice/SearchSlice'


export const store = configureStore({
  reducer:{
    [pokemonApi.reducerPath] :pokemonApi.reducer,
    search:searchReducer

  },
  middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware().concat(pokemonApi.middleware)

  
  
 
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch