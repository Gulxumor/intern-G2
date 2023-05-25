import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    userModalVisibility: false,
    bookedUserModalVisibility: false,
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
    //*************************************************************************************************************** */
    switchAddUserModalVisibility(state, { payload }) {
      state.userAddModalVisibility = {
        ...payload,
      };
    },
  
    //*************************************************************************************************************** */
    switchAddBookingModalVisibility(state, { payload }) {
      state.bookingAddModalVisibility = {
        ...payload,
      };
    },
  }
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
