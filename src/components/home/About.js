import React from "react";
// import Heading from "../common/Heading";
import { about } from "../data/Data";
import { Link } from "react-router-dom";
import { navList } from "../data/Data";
const aboutPath = navList.find(item => item.path === '/about').path;

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start  text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <p className=" text-uppercase">Grand Watergate  Hotel</p>

              </h1>
              <p className="mb-4 text-dark">
                Step into a world of endless happiness and adventure at Grand Watergate Hotel.
                We're not just a place to stay; we're an experience of extraordinary adventure and fun,
                accompanied by warm ambiance and excellent service. Be a part of the unforgettable experience here with us at Grand Watergate Hotel!
              </p>
              <div className="row g-3 pb-4">
              {about.map((item, index) => (
  <div key={index} className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
    <div className="border rounded p-1">
      <div className="border rounded text-center p-4">
        {item.icon}
        <h2 className="mb-1" data-toggle="counter-up">
          {item.count}
        </h2>
        <p className="mb-0">{item.text}</p>
      </div>
    </div>
  </div>
))}
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" to={aboutPath} >
                Explore More
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    alt=""
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/about-1.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    alt=""
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/about-2.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    alt=""
                    className="img-fluid rounded w-55 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    alt=""
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/about-4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
