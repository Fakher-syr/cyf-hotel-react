import React from "react";
import Order from "./Order";
import "./Restaurant.css";
//12. Extract pizza order to its own Order component
//13. Render more orders
const Restaurant = () => (
  <div className="restaurant">
    <h3>Restaurant Orders</h3>
    <ul>
      <Order orderType="Pizzas" />
      <Order orderType="Salads" />
      <Order orderType="Chocolate cake" />
    </ul>
  </div>
);

export default Restaurant;
