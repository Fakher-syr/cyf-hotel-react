import React, { useState } from "react";
import "./BodyRow.css";

const BodyRow = ({
  content: {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    numOfNights
  },
  setCustomerId
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleShowProfile = () => {
    setCustomerId(id);
  };

  return (
    <tr onClick={handleClick} className={isSelected ? "selected" : null}>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{numOfNights}</td>
      <td>
        <button className="btn btn-primary" onClick={handleShowProfile}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default BodyRow;

// import React from "react";
// import moment from "moment";

// const BodyRow = ({ content }) => {
//   const numberOfNights = moment(content.checkOutDate).diff(
//     content.checkInDate,
//     "days"
//   );

//   return (
//     <tr>
//       <th scope="row">{content.id}</th>
//       <td>{content.title}</td>
//       <td>{content.firstName}</td>
//       <td>{content.surname}</td>
//       <td>{content.email}</td>
//       <td>{content.roomId}</td>
//       <td>{content.checkInDate}</td>
//       <td>{content.checkOutDate}</td>
//       <td>{numberOfNights}</td>
//     </tr>
//   );
// };

// export default BodyRow;
