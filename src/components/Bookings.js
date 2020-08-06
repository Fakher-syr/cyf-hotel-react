import React, { useState, useEffect } from "react";
import "./Bookings.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm.js";
//14. Passing bookings from a state variable
//15. Load bookings remotely
//23. Show an error message
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => {
        if (!res.ok) {
          setIsError(true);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      });
  }, []);
  //19. Implementing the search functionality
  //24. Create a new booking
  const search = searchVal => {
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  const addNewBooking = newBooking => {
    const id = bookings.length + 1;
    setBookings([...bookings, { id, ...newBooking }]);
  };

  return isError ? (
    <div className="message">An error occurred while fetching data</div>
  ) : isLoading ? (
    <div className="message">Loading, please wait...</div>
  ) : (
    <div className="bookings">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setBookings={setBookings} />
        <BookingForm addNewBooking={addNewBooking} />
      </div>
    </div>
  );
};

export default Bookings;

//5. Create a table to show hotel bookings
// import React from "react";
// import "./Bookings.css";
// import Search from "./Search.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";

// const Bookings = () => {
//   const search = (searchVal) => {
//     console.info("TO DO!", searchVal);
//   };

//   return (
//     <div className="bookings-content">
//       <div className="container">
//         <Search search={search} />
//         <SearchResults results={FakeBookings} /> //6. Show more bookings in the table
//       </div>
//     </div>
//   );
// };

// export default Bookings;
