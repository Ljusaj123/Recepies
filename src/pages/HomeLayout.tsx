import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components";
import { Spinner } from "@chakra-ui/react";

function HomeLayout() {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <main className="container mx-auto mt-20 max-[640px]:max-w-64">
        {isPageLoading ? (
          <div className="text-center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default HomeLayout;
