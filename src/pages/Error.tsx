import errorImg from "../assets/error.svg";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  if (error.status === 404) {
    return (
      <div className="flex items-center justify-center text-center min-h-screen flex-col">
        <img src={errorImg} alt="error image" />
        <p className="paragraph mt-8">{error.data}</p>
        <button className="btn mt-8">
          <Link to="/">Back Home</Link>
        </button>
      </div>
    );
  }
  return (
    <div>
      <h3>Something went wrong...</h3>
      <p className="paragraph mt-8">{error.message}</p>
    </div>
  );
}

export default Error;
