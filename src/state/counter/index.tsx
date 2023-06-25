import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  address: string
  language: string
  USDTAddress: string
  DOGEAddress: string
  claimDOGEAddress: string
  showInfo: boolean
}

const initialState: CounterState = {
  value: 0,
  language: "cn",
  address: "",
  USDTAddress: "",
  DOGEAddress: "",
  claimDOGEAddress: "",
  showInfo: true
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload
    },
    setUSDTAddress: (state, action: PayloadAction<string>) => {
      state.USDTAddress = action.payload
    },
    setDOGEAddress: (state, action: PayloadAction<string>) => {
      state.DOGEAddress = action.payload
    },
    setClaimDOGEAddress: (state, action: PayloadAction<string>) => {
      state.claimDOGEAddress = action.payload
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
    setShowInfo: (state, action: PayloadAction<boolean>) => {
      state.showInfo = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,
  setAddress, setLanguage, setUSDTAddress, setDOGEAddress, setClaimDOGEAddress, setShowInfo } = counterSlice.actions

export default counterSlice.reducer