
import { Outlet } from "react-router-dom";
import { Header } from "../../components";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}