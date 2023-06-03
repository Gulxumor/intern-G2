import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    userModalVisibility: false,
    userAddModalVisibility: false,
    userAddBookingModalVisibility: false,
  },
  reducers: {
    switchProfileModalVisibility(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchlocaleModalVisibility(state) {
      state.localeModalVisibility = !state.localeModalVisibility;
    },
    switchUserModalVisibility(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
    switchAddUserModalVisibility(state) {
      state.userAddModalVisibility = !state.userAddModalVisibility;
    },
    switchUserAddBookingModalVisibility(state) {
      state.userAddBookingModalVisibility =
        !state.userAddBookingModalVisibility;
    },
  },
});
export default ModalSlice.reducer;
export const {
  switchProfileModalVisibility,
  switchlocaleModalVisibility,
  switchUserModalVisibility,
  switchAddUserModalVisibility,
  switchUserAddBookingModalVisibility,
} = ModalSlice.actions;
