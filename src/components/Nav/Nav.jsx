import React from "react";
import "./Nav.css";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "./../../assets/NetflixLogo.png";
import { UilGlobe } from "@iconscout/react-unicons";

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg justify-content-between">
        <NavLink className="navbar-brand">
          <Image src={logo} className="img" title="NetflixLogo" />
        </NavLink>
        <form className="form-inline ">
          <UilGlobe className="globe-icon ml-1"></UilGlobe>
          <select class="select pt-1 pb-1 pl-4 pr-4 mt-2 mr-2">
            <option>English</option>
            <option>Français</option>
            <option>العربية</option>
          </select>
          <Button className="btn-signIn font-weight-bold" variant="danger">
            Sign In
          </Button>
        </form>
      </nav>
    </div>
  );
};
export default Nav;
