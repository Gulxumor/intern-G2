import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    profileModalVisibility: false,
    languageModalVisibility: false,
    logOutModalVisibility: false,
  },
  reducers: {
    switchProfileModalVisibility(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchLanguageModalVisibility(state) {
      state.languageModalVisibility = !state.languageModalVisibility;
    },
    switchLogOutModalVisibility(state) {
      state.languageModalVisibility = !state.languageModalVisibility;
    },
  },
});
export default ModalSlice.reducer;
export const {
  switchProfileModalVisibility,
  switchLanguageModalVisibility,
  switchLogOutModalVisibility,
} = ModalSlice.actions;
