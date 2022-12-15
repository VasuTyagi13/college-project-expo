import React from "react";
import { Box } from "@material-ui/core";
import { PageHeader } from "../Common/CommonComponent";
import { Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";

export default function Notice() {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <PageHeader label="" pageTitle="Notice" />
      <Typography color="textSecondary">
        {" "}
        Here is the Notice. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptas quis ex fugiat, nemo nisi voluptatum ad et in vel
        voluptate quibusdam! Nulla reiciendis rem itaque rerum enim molestiae
        quis quidem corrupti molestias quae id harum.
      </Typography>
    </Box>
  );
}
