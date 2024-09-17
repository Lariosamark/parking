import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </main>
  );
}
