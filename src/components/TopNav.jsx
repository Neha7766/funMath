import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

export const TopNav = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <img
            className="img"
            src="Images.jpg"
            height={50}
            width={150}
            alt=" pickupBiz"
          />
        </Grid>
        <Grid item xs={1}>
          <Link to="/Number" className="tabnav">
            <Button variant="contained" color="success" fullWidth>
              Number
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/Tables" className="tabnav">
            <Button variant="contained" color="success" fullWidth>
              Tables
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/Square" className="tabnav">
            <Button variant="contained" color="success" fullWidth>
              Square
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/Geo" className="tabnav">
            <Button variant="contained" color="success" fullWidth>
              Geomatry
            </Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
