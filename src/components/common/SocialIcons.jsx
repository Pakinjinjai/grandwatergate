import React from "react";
import { socialIcons } from "../data/Data";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <>
      <div className="col-lg-3 px-5">
        <div className="d-inline-flex align-items-center py-2">
          {socialIcons.map((val, index) => (
            <div key={index}>
              <a
                className="rounded-circle btn btn-outline-light-nh  me-3 text-white"
                href="https://www.facebook.com/GrandWatergateHotel/"
                target="_blank">
                {val.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
