import React from "react";
import { Avatar } from "@material-ui/core";

const ProfilePic = () => {
  return (
    <React.Fragment>
      <Avatar
        style={{
          width: "15rem",
          height: "15rem",
          border: "1rem solid #d2e4ec",
          borderRadius: 0
        }}
      />
    </React.Fragment>
  );
};

export default ProfilePic;
