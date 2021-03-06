import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="Nav">
      <div className="Nav-left" id={openLinks ? "open" : "close"}>
        <span>GuitarPasal</span>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="Nav-right">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
