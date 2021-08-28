import {
  Paper,
  Typography,
  makeStyles,
  fade,
  Collapse,
} from "@material-ui/core";
import React, { useState } from "react";
import InputCard from "./InputCard";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: "#ebecf0",
    "&:hover": {
      backgroundColor: fade("#000000", 0.25),
    },
  },
}));
const InputContiner = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={2}
          onClick={() => setOpen(!open)}
        >
          <Typography> + Add A card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContiner;
