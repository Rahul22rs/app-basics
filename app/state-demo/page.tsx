//useState -> MUST be inside client side component
"use client";
import { useState } from "react";
import StateChildComponent from "./StateChildComponent";

const StateDemoPage = function () {
  const [age, setAge] = useState<number | null>(24);
  //always return JSX
  return (
    <>
      <h1>State Demo</h1>
      Enter your age : {` `}
      <input
        type="text"
        value={age || ""}
        onChange={(e) => {
          setAge(parseInt(e.target.value));
        }}
      />
      <br />
      {age != null && age >= 18 && <h1>Go and Vote</h1>}
      {age != null && age < 18 && <h1>Go and Play</h1>}
      <br />
      {/* Pass state "age" as "currentAge" prop to Child */}
      <StateChildComponent currentAgeProperty={age} />
    </>
  );
};
export default StateDemoPage;
