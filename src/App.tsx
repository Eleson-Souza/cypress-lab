import { BrowserRouter, Route, Routes } from "react-router";
import { Homepage } from "./pages/Homepage";
import { Users } from "./pages/Users";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
