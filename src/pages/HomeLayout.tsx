import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header } from "../modules";

function HomeLayout() {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <>
      <Header />
      <main className="container">
        {isPageLoading ? (
          <div className="loading">
            <div></div>
          </div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
