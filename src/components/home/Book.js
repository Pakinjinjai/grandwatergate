import dayjs from "dayjs";
import React from "react";



export default function Book() {


  const onSubmit = (e) =>{
    e.preventDefault();
    const arriValdate = dayjs(e.target.request_ArrivalDate.value).format("DD/MM/YYYY"); 
    const deparTuredate = dayjs(e.target.request_DepartureDate.value).format("DD/MM/YYYY"); 
    const promoCode = e.target.request_PromotionCode.value
    const hotel_key = "==QTq1EM"
    console.log("Check In: ",arriValdate);
    console.log("Check In: ",deparTuredate);
    console.log("Promotions Code : ",promoCode);
    window.location.href = (`https://reservations.instant-bookings.com/?&arrivaldate=${arriValdate}&departuredate=${deparTuredate}&promotioncode=${promoCode}&hotelkey=${hotel_key}`)
  };
  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <form
              id="frmbooking"
              onSubmit={onSubmit}
              >
              <div className="row g-2">
                <div className="col-md-10">
                  <div className="row g-2">
                    <div className="col-md">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest">
                        <label htmlFor="checkIn">Check in</label>
                        <input
                          type="date"
                          className="form-control datetimepicker-input"
                          id="request_ArrivalDate"
                          name="request_ArrivalDate"
                          data-target="#date1"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="col-md">
                      <div
                        className="date"
                        id="date2"
                        data-target-input="nearest">
                        <label htmlFor="checkOut">Check out</label>
                        <input
                          type="date"
                          className="form-control datetimepicker-input"
                          id="request_DepartureDate"
                          name="request_DepartureDate"
                          data-target="#date2"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                    <div className="col-md">
                      <div
                        className="date"
                        id="promoCode"
                        data-target-input="promoCode">
                        <label htmlFor="promoCode">Promotion code!</label>
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          id="request_PromotionCode"
                          name="request_PromotionCode"
                          placeholder="Promotion code"
                        />
                      </div>
                    </div>
                    <input
                          type="hidden"
                          name="request_HotelKEY"
                          value="==QTq1EM"
                          className="form-control datetimepicker-input"
                        />
                  </div>
                </div>
                <div className="col-md-2">
                  <label>Submit</label>
                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                    href="https://reservations.instant-bookings.com/?hotelkey=%3D%3DQTq1EM&hotelid=234&numberofadult=2&arrivaldate=31%2F03%2F2024&departuredate=04%2F04%2F2024&night=4">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
