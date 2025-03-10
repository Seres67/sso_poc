import { useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/users/me").then((res) => {
      if (res.status === 200) {
        navigate("/", { replace: true });
      }
    });
  }, []);

  return (
    <>
      <h1>Welcome!</h1>
      <a href="http://localhost:4000/auth/microsoft">
        <button>Login</button>
      </a>
    </>
  );
}

export default LandingPage;
