import React from "react";
import { Typography } from "@material-ui/core";

const EmailCount = ({ count }) => {
  return (
    <Typography variant="subtitle1">
      Results: <span style={{ fontSize: 20 }}>{count}</span> mail(s)
    </Typography>
  );
};

export default EmailCount;
