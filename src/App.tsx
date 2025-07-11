import { BrowserRouter, Route, Routes } from "react-router";
import { Homepage } from "./pages/Homepage";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login";
import { Settings } from "./pages/Settings";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};
