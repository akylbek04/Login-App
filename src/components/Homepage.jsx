import "../App.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };


  return (
    <div className="home">
      

      <div className="center">
        <h1 className="d-block">Welcome!</h1>
        <div className="text-center">
          <Button
            onClick={handleLogin}
            color="primary"
            className="me-1 h-login"
          >
            Log in
          </Button>
          <Button className="signup">Sign up</Button>
        </div>
      </div>
    </div>
  );
};
