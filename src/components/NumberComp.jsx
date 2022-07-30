import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Nextnum } from "./Numbers/NextNum";
import { Counter } from "./Numbers/Counter";

export const NumberComp = () => {
  return (
    <Card sx={{ bgcolor: "success.main" }}>
      <CardContent>
        <Typography variant="h4">Numbers</Typography>
        <Counter />
        <Nextnum />
      </CardContent>
    </Card>
  );
};
