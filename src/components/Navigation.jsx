import { NavLink } from "react-router-dom";
import { NavItem, Navbar, NavbarBrand } from "reactstrap";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";
import { Wrapper } from "../StyledComponent/styles";

export const Navigation = () => {
  const { loggedIn, isSwitchedOff, setIsSwitchedOff, setLoggedIn } =
    useContext(MyContext);
  const navigate = useNavigate();

  return (
    <Navbar className="py-1  w-100" color="dark" dark>
      <NavItem>
        <NavLink color="white" className="text-decoration-none" to="/">
          <img
            className="border-bottom border-bottom-1 border-black m-0 p-0 rounded-1"
            color="black"
            alt="logo"
            src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-success-coach-logo.-elegant-concept-of-success-marketing-logo.-png-image_3731789.jpg"
            style={{
              height: 30,
              width: 30,
            }}
          />
        </NavLink>
      </NavItem>
      <Wrapper>
        {Object.keys(loggedIn).length > 0 ? (
          <NavItem>
            <NavLink className="text-decoration-none" to="/login">
              <FiLogOut onClick={() => setLoggedIn(true)} className="logout" />
            </NavLink>
          </NavItem>
        ) : (
          <NavItem>
            <NavLink className="text-decoration-none" to="/login">
              <FaUser className="login" />
            </NavLink>
          </NavItem>
        )}

        <IoIosSunny color="white" className="sun" />
        {Object.keys(loggedIn).length && (
          <img
            src={loggedIn.profilePic}
            className="me-3 img-fluid rounded-circle border border-1 border-secondary-subtle"
            style={{
              height: 25,
              width: 25,
            }}
          />
        )}
      </Wrapper>
    </Navbar>
  );
};
