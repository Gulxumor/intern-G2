import { createSlice } from "@reduxjs/toolkit";
const LocaleSlice = createSlice({
  name: "localeSlice",
  initialState: {
    lang: localStorage.getItem("locale") || "uzLotin",
  },
  reducers: {
    switchLocale(state, { payload }) {
      state.lang = payload;
    },
  },
});

export const { switchLocale } = LocaleSlice.actions;
export default LocaleSlice.reducer;
