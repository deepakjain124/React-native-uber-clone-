import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination:null,
  traveltimeinfo:null
}

export const newSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state,action) => {
      state.origin=action.payload
    },
    setDestination: (state,action) => {
        state.destination=action.payload
      }, 
      settraveltimeinfo: (state,action) => {
        state.traveltimeinfo=action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, settraveltimeinfo } = newSlice.actions


//selectors

export const selectorigin=(state)=>state.nav.origin
export const selectdestination=(state)=>state.nav.destination
export const selecttraveltimeinfo=(state)=>state.nav.traveltimeinfo

export default newSlice.reducer