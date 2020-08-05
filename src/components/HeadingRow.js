import React from "react";

const HeadingRow = ({ sortBookings }) => {
  const columns = {
    id: "ID",
    title: "Title",
    firstName: "First name",
    surname: "Surname",
    email: "Email",
    roomId: "Room ID",
    checkInDate: "Check in date",
    checkOutDate: "Check out date",
    numOfNights: "# of nights"
  };

  return (
    <tr>
      {Object.entries(columns).map(([key, value]) => (
        <th scope="col" key={key} title={key} onClick={sortBookings}>
          {value}
        </th>
      ))}
    </tr>
  );
};

export default HeadingRow;

// import React from "react";

// const HeadingRow = () => (
//   <tr>
//     <th scope="col">ID</th>
//     <th scope="col">Title</th>
//     <th scope="col">First name</th>
//     <th scope="col">Surname</th>
//     <th scope="col">Email</th>
//     <th scope="col">Room ID</th>
//     <th scope="col">Check in date</th>
//     <th scope="col">Check out date</th>
//     <th scope="col"># of nights</th>
//   </tr>
// );

// export default HeadingRow;
