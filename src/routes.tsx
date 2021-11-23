import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileProvider from "./context/useProfile";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function ConfigRoutes() {
  return (
    <BrowserRouter>
      <ProfileProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ProfileProvider>
    </BrowserRouter>
  );
}
