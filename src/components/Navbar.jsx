import React from "react";
import "../App.css"; // Import the CSS file

function Navbar({ location, setLocation }) {
  return (
    <div className="flex justify-between items-center px-4 py-2 navbar"> {/* Apply the CSS class 'navbar' */}
      <p className="text-4xl navbar-logo">Weatherify</p> {/* Apply the CSS classes 'text-4xl' and 'navbar-logo' */}
      <span className="mr-2 text-2xl">{location}</span>
      <input
        type="text"
        placeholder="enter city name"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        className="border px-2 py-1 navbar-search" 
      />
    </div>
  );
}

export default Navbar;
