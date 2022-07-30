import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Table2 } from "./Numbers/Tables/Table2";
import { DynTable } from "./Numbers/Tables/DynTable";
import { StudentsCard } from "./Geo/StudentsCard";

export const Tables = () => {
  return (
    <Card sx={{ bgcolor: "coral" }}>
      <CardContent>
        <Typography variant="h4">Tables</Typography>
        <StudentsCard />
        <DynTable />
        <Table2 />
      </CardContent>
    </Card>
  );
};
