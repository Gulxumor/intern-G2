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
    bookingAddModalVisibility: {
      open: false,
      loading: false,
    },
    bookedUserActivateModalVisibility: {
      open: false,
      loading: false,
    },
    movingModalVisibility: { open: false, loading: false },
    bookedUserUpdateModalVisibility: false,
    bookedUserDetailedModalVisibility: false,
    reportOptionModalVisibility: false,
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
      state.userAddModalVisibility = {
        ...payload,
      };
    },
    switchBookedUserActivateModalVisibility(state, { payload }) {
      state.bookedUserActivateModalVisibility = {
        ...payload,
      };
    },
    switchAddBookingModalVisibility(state, { payload }) {
      state.bookingAddModalVisibility = {
        ...payload,
      };
    },
    switchUpdateBookingModalVisibility(state) {
      state.bookedUserUpdateModalVisibility =
        !state.bookedUserUpdateModalVisibility;
    },
    switchBookedUserDetailedModalVisibility(state) {
      state.bookedUserDetailedModalVisibility =
        !state.bookedUserDetailedModalVisibility;
    },
    switchBookedUserModalVisibility(state) {
      state.bookedUserModalVisibility = !state.bookedUserModalVisibility;
    },
    switchReportOptionsModalVisibility(state) {
      state.reportOptionModalVisibility = !state.reportOptionModalVisibility;
    },
    switchMovingModalVisibility(state, { payload }) {
      state.movingModalVisibility = {
        ...payload,
      };
    },
  },
});
export default ModalSlice.reducer;
export const {
  switchProfileModalVisibility,
  switchlocaleModalVisibility,
  switchUserModalVisibility,
  switchAddUserModalVisibility,
  switchAddBookingModalVisibility,
  switchBookedUserModalVisibility,
  switchReportOptionsModalVisibility,
  switchUpdateBookingModalVisibility,
  switchBookedUserDetailedModalVisibility,
  switchBookedUserActivateModalVisibility,
  switchMovingModalVisibility,
  switchLocaleModalVisibility,
} = ModalSlice.actions;
