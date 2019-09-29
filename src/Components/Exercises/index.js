import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default ({ exercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => (
          <Typography
            variant="headline"
            style={{ textTransform: "capitalize" }}
          >
            {group}
          </Typography>
        ))}
      </Paper>
      ;
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>Right Pane</Paper>;
    </Grid>
  </Grid>
);
