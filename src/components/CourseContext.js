import React, { useState } from "react";

const CourseContext = React.createContext();

export const CourseProvider = CourseContext.Provider;
export const CourseConsumer = CourseContext.Consumer;

export default CourseContext;

export const ApplicationProvider = ({ children }) => {
  const [cartdata, setcartdata] = useState([]);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const courseIds = cartdata.map((item) => item.id);

  const isInCart = (id) => courseIds.indexOf(id) !== -1;
  const addToCart = (course) => {
    console.log(course);
    setcartdata((prvCourses) => [...prvCourses, course]);
  };

  const deleteToCart = (id) => {
    const newData = cartdata.filter((item) => item.id !== id);
    setcartdata(newData);
  };

  const providerValue = {
    cartdata,
    setcartdata,
    isInCart,
    addToCart,
    deleteToCart,
    isAuthenticated,
    setAuthenticated,
  };
  return <CourseProvider value={providerValue}>{children}</CourseProvider>;
};
