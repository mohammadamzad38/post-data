import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Opps......!!!!!!!</h1>
      <p>{error.statusText || error.message}</p>
      {
        error.status === 404 && <div>
            <h3>Page not foound</h3>
            <p>Go Back To Home page</p>
            <Link to={`/`}><button >Go back</button></Link>
        </div>
      }
    </div>
  );
};

export default Error;
