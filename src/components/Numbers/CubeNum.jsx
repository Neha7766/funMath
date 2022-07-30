import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const CubeNum = () => {
  const [num, setNum] = useState(0);
  return (
    <React.Fragment>
      <h3>Cube Number</h3>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            label="Enter Number"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <h2> cube = {num ** 3}</h2>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
