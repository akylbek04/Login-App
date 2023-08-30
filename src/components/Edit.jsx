import { Form, FormGroup, Button, Label, Input, Row, Col } from "reactstrap";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

export const Edit = () => {
  const navigate = useNavigate();
  const { userData, setLoggedIn, loggedIn, setUserData } =
    useContext(MyContext);
  const [edited, setEdited] = useState({ ...loggedIn });
  const { email, password, firstName, lastName, city } = loggedIn;

  const handleEdit = (e) => {
    e.preventDefault();
    setLoggedIn(edited);
    const newUserData = userData.map((user) => {
      if (user.id === edited.id) {
        return edited;
      } else {
        return user;
      }
    });
    setUserData(newUserData);
    navigate(`/profile/${edited.username}`);
  };

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-form">
      <Form onSubmit={handleEdit}>
        <Row className="m-0 p-0">
          <Col md={4}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={edited.email}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={edited.password}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="m-0 p-0">
          <Col md={4}>
            <FormGroup>
              <Label for="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                value={edited.firstName}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                value={edited.lastName}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="m-0 p-0">
          <Col md={4}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="city"
                name="city"
                type="text"
                onChange={handleChange}
                value={edited.city}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button>Sign in</Button>
      </Form>
    </div>
  );
};
