import { useState } from "react";
import { login } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import logo from "../../img/logo.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="Login-Container">
      <div className="SPClogo">
        <img src={logo} alt="Logo" className="Logo" />
      </div>
      <div className="LoginForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
          <Link to="/forgot-password">Forgot Password?</Link>
          <p>
            Don't have an account? <Link to="/Register">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
