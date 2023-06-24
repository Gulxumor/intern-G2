import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    userModalVisibility: false,
    userAddModalVisibility: {
      open: false,
      loading: false,
    },
    userAddBookingModalVisibility: {
      open: false,
      loading: false,
    },
    detailedModalVisibility: false,
    editModalVisibility: false,
    moveModalVisibility: false,
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
    switchUserAddBookingModalVisibility(state, { payload }) {
      state.userAddBookingModalVisibility = payload;
    },
    switchDetailedModalVisibility(state) {
      state.detailedModalVisibility = !state.detailedModalVisibility;
    },
    switchEditModalVisibility(state) {
      state.editModalVisibility = !state.editModalVisibility;
    },
    switchMoveModalVisibility(state) {
      state.moveModalVisibility = !state.moveModalVisibility;
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
  switchMoveModalVisibility,
} = ModalSlice.actions;
