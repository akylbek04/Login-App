import { Form, FormGroup, Button, Label, Input, FormFeedback, FormText } from "reactstrap";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { userData, setLoggedIn } = useContext(MyContext);
  const [input, setInput] = useState({ email: "", password: " " });
  const [isExist, setIsExist] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();

    const loggedInUser = userData.find(
      (user) => (user.email === input.email && user.password === input.password)
    );
    if (loggedInUser) {
      console.log(loggedInUser, "Login.c")
      setLoggedIn(loggedInUser)
      setIsExist(false)
      navigate(`/profile/${loggedInUser.username}`);
    } else {
      setIsExist(true)
    }
  };

  const handleChange = (e) => {
    setIsExist(false);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="row login-page">
      <Form className="col-sm-4" onSubmit={handleLogin}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="enter your email..."
            type="email"
            onChange={handleChange}
            invalid={isExist}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="enter your passcode..."
            type="password"
            onChange={handleChange}
            invalid={isExist}
          />
          <FormFeedback>
             Invalid email or password
          </FormFeedback>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" /> <Label check>Remember me</Label>
        </FormGroup>
        <Button className="w-100 rounded-1">Submit</Button>
      </Form>
    </div>
  );
};
