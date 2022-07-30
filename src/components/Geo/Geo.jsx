import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { RectFence } from "./RectFence";
import { Students } from "./Students";
import { StudentsOptm } from "./StudentsOtpm";

export const Geo = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Geomatry</h2>
          <StudentsOptm />
          <Students />
          <RectFence />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
