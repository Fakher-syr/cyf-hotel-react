import React, { useState, useEffect } from "react";
//20. Display a customer profile - step 1
//21. Display a customer profile - step 2
//22. Show a loading message
const CustomerProfile = ({ id }) => {
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCustomerDetails(data));
  }, [id]);

  return customerDetails ? (
    <ul>
      <li>
        <strong>Customer {id} profile</strong>
      </li>
      <li>Email address: {customerDetails.email}</li>
      <li>Phone number: {customerDetails.phoneNumber}</li>
      <li>VIP status: {customerDetails.vip ? "yes" : "no"}</li>
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default CustomerProfile;
