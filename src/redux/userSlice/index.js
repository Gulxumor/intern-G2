import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    selectedUser: {
      userID: "",
      buildingMutation: "",
      clienteValue: {},
    },
    selectedBookedUser: {},
    updateBookedUser: {},
  },
  reducers: {
    setSelectedUser(state, { payload }) {
      state.selectedUser = payload;
    },
    setSelectedBookedUser(state, { payload }) {
      state.selectedBookedUser = payload;
    },
    setUpdateBookedUser(state, { payload }) {
      state.updateBookedUser = payload;
    },
  },
});
export default UserSlice.reducer;
export const { setSelectedUser, setSelectedBookedUser, setUpdateBookedUser } =
  UserSlice.actions;
