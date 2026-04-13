import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    carName: "",
    carImg: "",
    userName: "",
    userEmail: "",
    date: ""
  });

  const updateBooking = (data) => setBooking((prev) => ({ ...prev, ...data }));

  return (
    <BookingContext.Provider value={{ booking, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);