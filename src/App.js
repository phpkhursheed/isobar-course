import React, { useContext } from "react";
import "react-responsive-modal/styles.css";

import Courses from "./components/Courses";
//import Login from "./components/Login";
import CourseContext from "./components/CourseContext";

function App() {
  const { isAuthenticated, setAuthenticated, setcartdata } = useContext(
    CourseContext
  );
  const logout = () => {
    localStorage.removeItem("user-data");
    setAuthenticated(false);
    setcartdata([]);
  };
  return (
    <div className="container">
      <div className="row">

      {/* <Navigation /> */}
      {/* <button onClick={logout}>LogOut</button> */}
      <Courses />
      {/* <button onClick={onOpenModal}>Open modal</button> */}
    </div>
    </div>
  );
}
export default App;
