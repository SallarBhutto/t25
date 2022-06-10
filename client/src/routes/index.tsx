import React from "react";
import { Routes as DomRoutes, Route } from "react-router-dom";
import { ProductList , NotFound } from "../pages";

const Routes = () => (
  <DomRoutes>
    <Route path="/" element={<ProductList />} />
    <Route path="*" element={<NotFound />} />
  </DomRoutes>
);

export default Routes;
