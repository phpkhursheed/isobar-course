import React, { useContext } from "react";
import CourseContext from "./CourseContext";

export default function Cart() {
  const { cartdata } = useContext(CourseContext);
  console.log(cartdata);
  return (
    <div>
      <h4>Your Cart:</h4>
      {cartdata.map((data, i) => {
        // console.log(data.title);
        return (
          <div key={i}>
            <h2>{data.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
