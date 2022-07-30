import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const PowNum = () => {
  const [num, setNum] = useState(0);
  const [pow, setPow] = useState(0);
  return (
    <React.Fragment>
      <h3>Power of Number</h3>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Enter Number"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Enter Number"
            variant="outlined"
            onChange={(e) => setPow(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <h1>
            {num} to the power {pow} is = {num ** pow}
          </h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
