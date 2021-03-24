import React, { useState, useEffect, useContext, useRef } from "react";
import newcourseData from "../data.json";
import Cart from "./Cart";
import CourseContext from "./CourseContext";
import Login from "./Login";
const NumberContext = React.createContext();
const lessons = newcourseData[0].lessons;

export default function Courses() {
  const {
    isInCart,
    isAuthenticated,
    setAuthenticated,
    addToCart,
    deleteToCart,
  } = useContext(CourseContext);
  // console.log(context);
  //console.log(isAuthenticated);

  const userData = localStorage.getItem("user-data");
  if (userData) {
    setAuthenticated(true);
  }

  const [courseData, setCourseData] = useState(lessons);
  // const [cartdata, setcartdata] = useState([]);
  // const courseIds = cartdata.map((item) => item.id);
  // const isInCart = (id) => courseIds.indexOf(id) !== -1;

  // const addToCart = (course) => {
  //   setcartdata((prvCourses) => [...prvCourses, course]);
  // };

  // const deleteToCart = (id) => {
  //   const newData = cartdata.filter((item) => item.id !== id);
  //   setcartdata(newData);
  // };

  const [searchtext, setsearchtext] = useState("");
  const handleSearch = (e) => {
    setsearchtext(e.target.value);
    //const copiedData = [...courseData];
    const searchData = lessons.filter((items) => {
      return (
        items.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setCourseData(searchData);
  };
  const childRef = useRef();
  const handleOpenModal = () => {
    //console.log("Hello");
    childRef.current.showAlert();

    //childelement.onOpenModal();
    //console.log(childelement);
  };
  const courses = courseData.map((course, i) => {
    if (i < 5) {
      return (
        <div className=" col-md-4" key={course.id}>
          <div className="card rounded-3">
          <img src={course.image} className="img-fluid" alt={course.name} />
          <div className="card-body">
            <p className="card-text">{course.name}</p>

            {isAuthenticated ? (
              [
                isInCart(course.id) ? (
                  <button className="btn btn-danger" onClick={() => deleteToCart(course.id)}>
                    Remove to Cart
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={() => addToCart(course)}>Add to Cart</button>
                ),
              ]
            ) : (
              <button className="btn btn-primary"
                onClick={() => {
                  childRef.current.showAlert();
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div>
        <div className="sort-by">
          <select>
            <option>Select Date</option>
            <option>25-03-2021</option>
          </select>
          <select>
            <option>Duration</option>
            <option>25-03-2021</option>
          </select>
        </div>
        <input type="search" name="search" onChange={handleSearch} />
      </div>
      <div className="row courses">
        
        {courses}
        
        </div>
      {/* <CourseProvider value={cartdata}> */}

      <Cart />

      {/* </CourseProvider> */}

      <Login ref={childRef} />
    </div>
  );
}
