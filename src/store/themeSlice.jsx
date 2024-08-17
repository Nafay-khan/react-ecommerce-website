import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     color : ' ',
    }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    settheme : (state, data)=>{
        state.color = data.payload
    }
  }
})

export const {settheme} = themeSlice.actions
export default themeSlice.reducer