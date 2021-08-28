import { Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));
const Card = () => {
  const styles = useStyles();
  return (
    <div>
      <Paper className={styles.card}>
        <Typography>List of TODOS</Typography>
      </Paper>
    </div>
  );
};

export default Card;
