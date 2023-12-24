import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header } from "../modules";

function HomeLayout() {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <main className="container">
        {isPageLoading ? (
          <div className="loading">
            <div></div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
