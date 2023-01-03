import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/layout";
import Dashboard from "./pages/dashboard";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
