//useState -> MUST be inside client side component
"use client";
import { useEffect, useState } from "react";

const StateChildComponent = function ({
  currentAgeProperty,
}: {
  currentAgeProperty: number | null;
}) {
  useEffect(() => {
    console.log(">>>> useEffect Called --- "+new Date().toTimeString());
  },[currentAgeProperty]);
  return (
    <>
      <hr />
      <h3>Child, age of parent is {currentAgeProperty}</h3>
      {currentAgeProperty != null &&
        currentAgeProperty >= 10 &&
        currentAgeProperty <= 15 && <h1>Eligible for enrollment</h1>}
      {currentAgeProperty != null &&
        (currentAgeProperty < 10 || currentAgeProperty > 15) && (
          <h1>Not eligible</h1>
        )}

      <hr />
    </>
  );
};
export default StateChildComponent;
