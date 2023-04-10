import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import DetailPage from "../pages/Detail";

const Navigation = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:page" element={<DetailPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default Navigation;


