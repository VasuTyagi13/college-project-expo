import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  logo: {
    color: "#e0fbfc ",
  },
  navlist: {
    minWidth: "250px",
    maxWidth: "300px",
  },
  ulAvater: {
    backgroundColor: "#e0fbfc ",
    color: "white",
  },
  navAvatar: {
    width: "35px",
    height: "35px",
  },

  //wrapper of main contianer
  wrapper: {
    minHeight: "100vh",
    height: "auto",
    background: "#eef8ff",
    marginTop: "60px",
    padding: theme.spacing(2, 2, 0, 34),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
      marginTop: "45px",
    },
  },

  //Side nav
  drawerPaper: {
    backgroundColor: "#293241 ",
    opacity: 0.5,
    width: "250px",
    marginTop: "65px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  navlinks: {
    color: "#e0fbfc ",
    "& :hover , &:hover div": {
      color: "#e0fbfc ",
    },
    opacity: 1,
    " & div": {
      color: "#e0fbfc ",
      opacity: 1,
    },
  },
  activeNavlinks: {
    color: "#e0fbfc ",
    opacity: 1,
    "& div": {
      color: "#e0fbfc ",
      opacity: 2,
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
    opacity: 1,
  },
}));
