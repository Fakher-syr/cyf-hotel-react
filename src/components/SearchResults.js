import React, { useState } from "react";
import moment from "moment";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";
import CustomerProfile from "./CustomerProfile";
//7. Calculate and show the number of nights for each booking
//25. Sort table columns
const SearchResults = ({ results, setBookings }) => {
  const [customerId, setCustomerId] = useState(null);
  const [isSorted, setIsSorted] = useState({});

  const sortBookings = event => {
    const column = event.target.title;
    let sortedBookings;

    if (!isSorted[column]) {
      sortedBookings = sortByColumnName(column);
      setIsSorted({ ...isSorted, [column]: true });
    } else {
      sortedBookings = results.reverse();
      setIsSorted({ ...isSorted, [column]: false });
    }
    setBookings([...sortedBookings]);
  };

  const sortByColumnName = column => {
    return results.sort((a, b) => {
      if (typeof a[column] === "number") {
        return a[column] - b[column];
      } else {
        return a[column].localeCompare(b[column]);
      }
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <HeadingRow sortBookings={sortBookings} />
        </thead>
        <tbody>
          {results.map(result => {
            result.numOfNights = moment(result.checkOutDate).diff(
              result.checkInDate,
              "days"
            );
            return (
              <BodyRow
                key={result.id}
                content={result}
                setCustomerId={setCustomerId}
              />
            );
          })}
        </tbody>
      </table>
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

export default SearchResults;

//5. Create a table to show hotel bookings

// import React from "react";
// import HeadingRow from "./HeadingRow";
// import BodyRow from "./BodyRow";

// const SearchResults = ({ results }) => (
//   <table className="table">
//     <thead>
//       <HeadingRow />
//     </thead>
//     <tbody>
//       {results.map((result) => (
//         <BodyRow key={result.roomId} content={result} />
//       ))}
//     </tbody>
//   </table>
// );

// export default SearchResults;
