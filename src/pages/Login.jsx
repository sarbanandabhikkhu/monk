import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="login">
      <h1>Login</h1>
      <p>You need to login to access this page</p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </main>
  );
}

export default Login;
