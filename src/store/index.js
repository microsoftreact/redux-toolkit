import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    show: true,
  },
  reducers: {
    incremend(state, action) {
      state.counter = state.counter + action.payload;
    },
    decremend(state, action) {
      state.counter --;
    },
    toggle(state){
      state.show = !state.show
    }
  },
});

const store = configureStore({
  reducer: counterSlice.reducer
})

export const  counterAction = counterSlice.actions;
export default store