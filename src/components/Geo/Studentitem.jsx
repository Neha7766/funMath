import React from "react";
import { Card, CardContent } from "@mui/material";
import { InsertEmoticon } from "@mui/icons-material";
import ManIcon from "@mui/icons-material/Man";
import GirlIcon from "@mui/icons-material/Girl";

export const Studentitem = ({ item }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          {item.gender === "male" ? (
            <ManIcon sx={{ fontSize: 100, color: "blue" }} />
          ) : (         
            <GirlIcon sx={{ fontSize: 100, color: "red" }} />
          )}
          <h1>{item.fname}</h1>
          <h5>{item.lname}</h5>
          <hr />
          <h3>{item.age} years</h3>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
