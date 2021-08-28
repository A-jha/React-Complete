import React from "react";
import { CssBaseline, Paper, Typography, makeStyles } from "@material-ui/core";
import Title from "./Title";
import Card from "./Card";
import InputContainer from "./InputContiner";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#EBECf0",
    marginLeft: theme.spacing(1),
  },
}));
const List = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Paper className={classes.root}>
          <CssBaseline />
          <Title />
          <Card />
          <Card />
          <Card />
          <Card />
          <InputContainer />
        </Paper>
      </div>
    </>
  );
};

export default List;
