import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { RequireAuth } from "react-auth-kit";

const Root = () => {
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
          <Route element={<Home />} index />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Root;
