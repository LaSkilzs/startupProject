import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { signOut } from "../../firebase";

const devNavOptions = [
  {
    name: "Landing Page",
    link: "/"
  },
  {
    name: "Immersful Info",
    link: "/userdash"
  },
  {
    name: "Yale Project",
    link: "/login-yale"
  },
  { name: "Logout", link: "/" },
  { name: "Login", link: "/login" }
];

const DevNavBarChange = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(value) {
    console.log("value", value);
    props.handleNav(value);
    setAnchorEl(null);
  }
  console.log("props", props);

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MenuIcon style={{ fontSize: "2rem", color: "white" }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {devNavOptions.map(option => (
          <MenuItem
            key={option.name}
            selected={option === "Landing Page"}
            onClick={() => handleClose(option)}
          >
            {option.link === "Logout" && !localStorage["loggedIn"] ? (
              <Link to={option.link} onClick={() => signOut()}>
                {option.name}
              </Link>
            ) : (
              <Link to={option.link}>{option.name}</Link>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DevNavBarChange;
