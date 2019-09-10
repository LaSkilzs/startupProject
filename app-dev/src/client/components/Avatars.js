import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";

const avatarList = [
  <a href="https://www.facebook.com/Immersful" className="navlink">
    <i className="fab fa-facebook-f"></i>
  </a>,
  <a href="https://twitter.com/immersful" className="navlink">
    <i className="fab fa-twitter"></i>
  </a>,
  <a href="https://instagram.com/immersful/" className="navlink">
    <i className="fab fa-instagram"></i>
  </a>,
  <a
    href="https://www.linkedin.com/company/immersful/about/"
    className="navlink"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>,
  <a href="https://youtu.be/oU-ZpJRKZmw" className="navlink">
    <i className="fab fa-youtube"></i>
  </a>
];

const useStyles = makeStyles({
  avatar: { padding: ".5rem", margin: ".3rem", background: "#0072d0" },
  navlink: { color: "white", textDecoration: "none" }
});

const Avatars = props => {
  const classes = useStyles();
  const avatar = avatarList.map((avatar, index) => (
    <Avatar key={index} className={classes.avatar}>
      {avatar}
    </Avatar>
  ));
  return <React.Fragment>{avatar}</React.Fragment>;
};

export default Avatars;
