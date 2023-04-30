import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route element={<Home />} index />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Root;
