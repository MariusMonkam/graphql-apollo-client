import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: "white",
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%,0%)",
      backgroundColor: `${theme.palette.secondary.light}`,
      transformOrigin: "center",
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover:before": {
      visibility: "visible",
      width: "100%",
    },
  },
}));
