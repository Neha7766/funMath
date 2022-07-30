import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NumberComp } from "./NumberComp";
import { Tables } from "./Tables";
import { Square } from "./Square";
import { Numsquare } from "./Numsquare";
import { TopNav } from "./TopNav";
// import { SquareNum } from "./Numbers/SquareNum";
import { Geo } from "./Geo/Geo";

export const Home = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="number" element={<NumberComp />} />
          <Route path="tables" element={<Tables />} />
          <Route path="square" element={<Square />} />
          <Route path="numsqure" element={<Numsquare />} />
          <Route path="/geo" element={<Geo />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
