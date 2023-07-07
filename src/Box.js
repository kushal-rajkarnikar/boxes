import React from "react";

export default function Box(props) {
  const [on, setOn] = React.useState(props.on);

  // const [name, setName] = React.useState("Kushal");
  // setName("Bibek");

  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
    // if statevariable ko value 

  }

  return <div style={styles} onClick={toggle} className="box"></div>;
}
