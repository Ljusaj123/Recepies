import { Outlet } from "react-router-dom";
import { Footer, Header } from "../modules";

function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
