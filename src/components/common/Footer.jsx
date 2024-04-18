import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              
                <Link to="/">
                  <h1 className="text-white text-uppercase mb-3">Grand watergate Hotel</h1>
                </Link>
                <p className="text-white mb-0">
                Welcome to Grand Watergate Hotel - Where you'll find true happiness and relaxation.
                With comprehensive services and amenities tailored just for you,
                indulge in the accommodations we recommend and register to receive special information and promotions!
                </p>
              
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-white text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, social) => (
                  <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/GrandWatergateHotel/" target="_blank" key={social} rel="noreferrer">
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-white text-uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
      <p key={itemIndex}>
      {item.name}
    </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
