import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import { UilAngleRightB } from "@iconscout/react-unicons";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="text-header text-center text-white">
          <h1 className=" font-weight-bold">
            Unlimited movies, TV shows, and more
          </h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="form-inline justify-content-center">
            <input
              type="email"
              className="form-control pt-4 pb-4 pl-3 pr-5"
              placeholder="Email address"
            />
            <Button type="submit" variant="danger" className="btn-email ml-2">
              <h5 className="pr-2 pl-3 pt-1">
                Get Started <UilAngleRightB />
              </h5>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
