import React from "react";

function footer() {
  var curr_year = new Date().getFullYear();
  return (
    <footer>
      <p>COPYRIGHT @ {curr_year}</p>
    </footer>
  );
}

export default footer;
