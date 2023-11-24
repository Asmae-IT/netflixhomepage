import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="container-fluid">
      <div className="container ">
        <div className="row d-flex">
          <div className="col-sm">
            <a href="https://help.netflix.com/fr/contactus">
              Questions? Contact us.
            </a>
            <div class="list-group mt-4">
              <a href="https://help.netflix.com/fr/node/412">FAQ</a>
              <a href="https://media.netflix.com/fr/" className="mt-2">
                Media Center
              </a>
              <a href="https://devices.netflix.com/fr/" className="mt-2">
                Ways to Watch
              </a>
              <a href="https://www.netflix.com/ma-en/#" className="mt-2">
                Cookie Preferences
              </a>
              <a href="https://fast.com/fr/" className="mt-2">
                Speed Test
              </a>
            </div>
            <div class="form-group mt-5">
              <select class="form-control">
                <option>English</option>
                <option>Français</option>
                <option>العربية</option>
              </select>
            </div>
            <p>Netflix Morocco</p>
          </div>
          <div className="col-sm mt-5">
            <div class="list-group">
              <a href="https://help.netflix.com/fr/node/412">Help Center</a>
              <a href="https://media.netflix.com/fr/" className="mt-2">
                Investor Relations
              </a>
              <a href="https://devices.netflix.com/fr/" className="mt-2">
                Terms of Use
              </a>
              <a href="https://www.netflix.com/ma-en/#" className="mt-2">
                Corporate Information
              </a>
              <a href="https://fast.com/fr/" className="mt-2">
                Legal Notices
              </a>
            </div>
          </div>
          <div className="col-sm mt-5">
            <div class="list-group">
              <a href="https://help.netflix.com/fr/node/412">Account</a>
              <a href="https://media.netflix.com/fr/" className="mt-2">
                Jobs
              </a>
              <a href="https://devices.netflix.com/fr/" className="mt-2">
                Privacy
              </a>
              <a href="https://www.netflix.com/ma-en/#" className="mt-2">
                Contact Us
              </a>
              <a href="https://fast.com/fr/" className="mt-2">
                Only on Netflix
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
