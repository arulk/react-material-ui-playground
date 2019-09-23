import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default props => (
  <Paper>
    <Tabs indicatorColor="primary" textColor="primary" centered value={0}>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
);
