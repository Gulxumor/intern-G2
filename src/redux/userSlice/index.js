import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    selectedUser: {
      userID: "",
      buildingMutation: "",
      clienteValue: {},
    },
  },
  reducers: {
    setSelectedUser(state, { payload }) {
      state.selectedUser = payload;
    },
  },
});
export default UserSlice.reducer;
export const { setSelectedUser } = UserSlice.actions;
