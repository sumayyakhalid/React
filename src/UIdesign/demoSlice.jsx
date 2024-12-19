import { createSlice } from "@reduxjs/toolkit"
const initialState={
    text:'hello world'
}
const demoSlice=createSlice({
    name:'demo',
   initialState,
   reducers:
   {
    setText:(state,action)=>{
        state.text=action.payload
    }
   }

})
export const {setText}=demoSlice.actions
export default demoSlice.reducer;