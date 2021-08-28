import {
  IconButton,
  InputBase,
  Paper,
  Button,
  makeStyles,
} from "@material-ui/core";
import Clearicon from "@material-ui/icons/Clear";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 1),
  },
  input: {
    padding: theme.spacing(1, 1, 1, 1),
  },
  btn: {
    display: "flex",
    justifyContent: "space-between",
  },
  confirm: {
    margin: theme.spacing(1, 1, 1, 2),
  },
  cancel: {
    margin: theme.spacing(0, 2, 0, 0),
  },
}));
const InputCard = ({ setOpen }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.card}>
        <Paper>
          <InputBase
            onBlur={() => setOpen(false)}
            multiline
            fullWidth
            placeholder="Create A new Card"
            inputProps={{
              className: classes.input,
            }}
          ></InputBase>
        </Paper>
      </div>
      <div className={classes.btn}>
        <Button variant="outlined" color="primary" className={classes.confirm}>
          Add Card
        </Button>
        <IconButton
          color="secondary"
          className={classes.cancel}
          onClick={() => setOpen(false)}
        >
          <Clearicon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
