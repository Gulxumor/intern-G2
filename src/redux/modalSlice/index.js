import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    userModalVisibility: false,
    userAddModalVisibility: false,
    userAddBookingModalVisibility: {
      open: false,
      loading: false,
    },
    detailedModalVisibility: false,
    editModalVisibility: false,
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
    switchAddUserModalVisibility(state, { payload }) {
      state.userAddModalVisibility = payload;
    },
    switchUserAddBookingModalVisibility(state) {
      state.userAddBookingModalVisibility =
        !state.userAddBookingModalVisibility;
    },
    switchDetailedModalVisibility(state) {
      state.detailedModalVisibility = !state.detailedModalVisibility;
    },
    switchEditModalVisibility(state) {
      state.editModalVisibility = !state.editModalVisibility;
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
  switchDetailedModalVisibility,
  switchEditModalVisibility,
} = ModalSlice.actions;
