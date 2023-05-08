import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { RequireAuth } from "react-auth-kit";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "../utils/locale/en";
import { ru } from "../utils/locale/ru";
import { uzLotin } from "../utils/locale/uzLotin";
import { uzKrill } from "../utils/locale/uzKrill";
import { useSelector } from "react-redux";
import { path } from "../utils/paths";

const Root = () => {
  const { lang } = useSelector((state) => state.locale);
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uzLotin: { translation: uzLotin },
      uzKrill: { translation: uzKrill },
    },
    lang: lang,
    fallbackLng: lang,
  });

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <Navbar />
            </RequireAuth>
          }
        >
          {path.map(({ id, path, element }) => (
            <Route element={element} path={path} key={id} />
          ))}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Root;
