import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pagenotfound">
      <div className="errornumber">404</div>
      <h1>Oops!</h1>
      <h1>Page not found</h1>

      <div className="pagenotfoundlink">
        Back to Home page ? <Link to="/">Home</Link>
      </div>
    </div>
  );
}
