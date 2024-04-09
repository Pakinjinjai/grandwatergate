import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonHeading from "../common/CommonHeading";
import { roomItems } from "../data/Data";

export default function Rooms() {
  
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true, // เปิดใช้ autoplay
    // autoplaySpeed: 5000, // กำหนดเวลาในการสลับภาพทุก 3 วินาที
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={key}>
                <div className="room-item shadow rounded overflow-hidden">
                  <Slider {...settings}>
                    {item.img.map((img, index) => (
                      <div key={index}>
                        <img className="img-fluid" src={img} alt="img" />
                      </div>
                    ))}
                  </Slider>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    {/* <div className="d-flex mb-3">
                      {item.facility.map((facility, index) => (
                        <small className="border-end me-3 pe-3" key={index}>
                          {facility.icon}
                          {facility.quantity} {facility.facility}
                        </small>
                      ))}
                    </div> */}
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      {/* View Detail Rooms  */ }

                      {/* <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        {item.yellowbtn}
                      </a> */}
                      <a
                        className="btn btn-sm btn-dark rounded py-2 px-4"
                        href="https://instant-bookings.com/ibs/bookings?hotelkey===QTq1EM"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
