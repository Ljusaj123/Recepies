import errorImg from "../assets/error.svg";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError(); // rijesit kasnije

  if (error.status === 404) {
    return (
      <div className="flex items-center justify-center text-center min-h-screen flex-col">
        <img src={errorImg} alt="error image" />
        <p>{error.data}</p>
        <button>
          <Link to="/">Back Home</Link>
        </button>
      </div>
    );
  }
}

export default Error;
