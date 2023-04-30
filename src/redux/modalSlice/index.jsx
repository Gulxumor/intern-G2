import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    profileModalVisibility: false,
  },
  reducers: {
    switchProfileModalVisibility(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
  },
});
export default ModalSlice.reducer;
export const { switchProfileModalVisibility } = ModalSlice.actions;
