import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isMenuOpen: false
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpenFalse: (state) => {
      state.isMenuOpen = false;
    }
  }
});

export const { setMenuOpenFalse, toggleMenu } = appSlice.actions;
export default appSlice.reducer;
