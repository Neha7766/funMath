import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

export const SquareNum = () => {
  const [num, setNum] = useState(0);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            label="Enter Number"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <h2>
            square of {num} is = {num ** 2}
          </h2>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
