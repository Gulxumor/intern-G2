import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    selectedUserID: "",
  },
  reducers: {
    switchSetSelectedUserID(state, { payload }) {
      state.selectedUserID = payload;
    },
  },
});
export default UserSlice.reducer;
export const { switchSetSelectedUserID } = UserSlice.actions;