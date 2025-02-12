import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  // Case : 1 Run on every render
  useEffect(() => {
    alert("Hey i will on every render");
  });

  // Case 2 : Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render");
  }, []);

  // Case : 3 Run only when certain values change
  useEffect(() => {
    alert("I am running because color was changed");
  }, [color]);

  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx");
    return ()=>{
      alert("Components was unmounted")
    }
  }, []);

  return <div>I am Navbar of {color} color hee...</div>;
};

export default Navbar;
