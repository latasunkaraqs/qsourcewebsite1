import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="pt-[91px]">
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
