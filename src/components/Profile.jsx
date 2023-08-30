import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { MdEdit, MdOutlineInterests } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "../App.css";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export const Profile = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(MyContext);
  const {
    id,
    firstName,
    lastName,
    username,
    email,
    password,
    age,
    city,
    interests,
    profilePic,
  } = loggedIn;

  const handleEdit = () => {
    navigate(`/profile/${username}/edit`);
  };
  return (
    <div className="grid">
      {loggedIn && (
        <Card className="col-sm-3 p-1 rounded-0">
          <img alt={username} src={profilePic} />
          <AiOutlinePlus className="text-center rounded-circle position-absolute post " />
          <CardBody className="p-1 py-2">
            <CardTitle className="mt-2">
              {firstName} {lastName} <span className="age">({age} y.o)</span>
            </CardTitle>
            <div className="name-wrapper">
              <FaUser className=" name-icon" />
              <p className="name-text">{username}</p>
            </div>

            <div className="loc-wrapper">
              <MdLocationOn className="loc-icon p-0 m-0" />{" "}
              <p className="m-0 ms-2">
                lives in <span className="loc-text "> {city}</span>
              </p>
            </div>
            <div className="wrapper">
              <MdOutlineInterests className="interest-icon me-2" />
              {interests &&
                interests.map((interest, index) => {
                  return (
                    <p className="interest" key={index}>
                      {interest}
                    </p>
                  );
                })}
            </div>
            <MdEdit className="edit-btn" onClick={handleEdit} color="primary" />
          </CardBody>
        </Card>
      )}
    </div>
  );
};
