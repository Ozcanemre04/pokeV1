import { createSlice } from "@reduxjs/toolkit";
export const initialState ={
    search :'pidgey'
   }

export const  searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        searchForFilter:(state,action)=>{
            state.search =action.payload
           
       },
    }
})

export const {searchForFilter} =searchSlice.actions
export default searchSlice.reducer