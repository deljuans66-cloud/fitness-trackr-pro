import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import ActivitiesPage from "./activities/ActivitiesPage.jsx";
import ActivityPage from "./activities/ActivityPage.jsx"; // <-- you must create this
import Error404 from "./Error404.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:id" element={<ActivityPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
