import React from "react";
//9. Preparing to add more pizzas
//11. Extract the Add button to its own component
const RestaurantButton = ({ orderOne }) => (
  <button className="btn btn-primary" onClick={orderOne}>
    Add
  </button>
);

export default RestaurantButton;
