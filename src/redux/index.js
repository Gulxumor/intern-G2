import { configureStore } from "@reduxjs/toolkit"
import localeSlice from "./localeSlice"
import modalSlice from "./modalSlice"
import userSlice from "./userSlice"

export default configureStore({
    reducer: {
        modal: modalSlice,
        locale: localeSlice,
        user: userSlice
    }
})