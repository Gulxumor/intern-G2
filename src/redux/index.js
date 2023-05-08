import { configureStore } from "@reduxjs/toolkit"
import localeSlice from "./localeSlice"
import modalSlice from "./modalSlice"
export default configureStore({
    reducer: {
        modal: modalSlice,
        locale: localeSlice
    }
})