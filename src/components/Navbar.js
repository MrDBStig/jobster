import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, logoutUser } from "../features/user/userSlice";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const logout = () => {
    dispatch(logoutUser("Logging out..."));
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle /> {user?.name} <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout && "show-dropdown"}`}>
            <button type="button" className="dropdown-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
