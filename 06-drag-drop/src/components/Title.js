import { InputBase, Typography, makeStyles } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  editableTitleContainer: {
    display: "flex",
    marginRight: theme.spacing(1),
  },
  editableTitle: {
    flexGrow: "1",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginLeft: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      backgroundColor: "#ddd",
    },
    fontSize: "1.5rem",
  },
}));
const Title = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value={"Todo"}
            inputProps={{
              className: classes.input,
            }}
            onBlur={() => setOpen(!open)}
          ></InputBase>
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
