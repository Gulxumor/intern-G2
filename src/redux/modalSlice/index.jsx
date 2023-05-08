import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
  },
  reducers: {
    switchProfileModalVisibility(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchlocaleModalVisibility(state) {
      state.localeModalVisibility = !state.localeModalVisibility;
    },
  },
});
export default ModalSlice.reducer;
export const { switchProfileModalVisibility, switchlocaleModalVisibility } =
  ModalSlice.actions;
