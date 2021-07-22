import React from "react";

const Details = () => {
  /* TODO: Implment GET /property/{id} to get a detail of a property.  For now, just hardcode the data here.
   */
  const detailListingDatabase = [
    {
      id: 1,
      address: "1234 A St",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/424/40957424_1.jpg",
      price: 900000,
      bedrooms: 4,
      baths: 3,
      size: 2500,
      built: "1985",
      type: "single",
      history: [
        { date: "1990", price: "800000" },
        { date: "1999", price: "801000" },
        { date: "2000", price: "804000" },
      ],
      schools: [
        { name: "Wilson High", rating: 4 },
        { name: "Washington High", rating: 6 },
      ],
    },
    {
      id: 2,
      address: "452 First St",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/724/40959724_0.jpg",
      price: 932000,
      bedrooms: 3,
      baths: 2.5,
      size: 1700,
      built: "1985",
      type: "single",
      history: [
        { date: "1990", price: "800000" },
        { date: "1999", price: "801000" },
        { date: "2000", price: "804000" },
      ],
      schools: [
        { name: "Wilson High", rating: 4 },
        { name: "Washington High", rating: 6 },
      ],
    },
    {
      id: 3,
      address: "33029 ELm St",
      photo: "https://ssl.cdn-redfin.com/photo/27/bigphoto/113/321066113_0.jpg",
      price: 1200000,
      detail: "4 Beds  3 Baths  2000 Sq.Ft.",
      bedrooms: 4,
      baths: 3,
      size: 2000,
      built: "1985",
      type: "single",
      history: [
        { date: "1990", price: "800000" },
        { date: "1999", price: "801000" },
        { date: "2000", price: "804000" },
      ],
      schools: [
        { name: "Wilson High", rating: 4 },
        { name: "Washington High", rating: 6 },
      ],
    },
    {
      id: 4,
      address: "4087 Sand Ave",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/613/40956613_0.jpg",
      price: 780000,
      detail: "3 Beds  2 Baths  1400 Sq.Ft.",
      bedrooms: 3,
      baths: 2,
      size: 1400,
      built: "1985",
      type: "single",
      history: [
        { date: "1990", price: "800000" },
        { date: "1999", price: "801000" },
        { date: "2000", price: "804000" },
      ],
      schools: [
        { name: "Wilson High", rating: 4 },
        { name: "Washington High", rating: 6 },
      ],
    },
    {
      id: 5,
      address: "9833 15th St",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/190/40951190_3.jpg",
      price: 1600000,
      detail: "4 Beds  3 Baths  2400 Sq.Ft.",
      bedrooms: 4,
      baths: 3,
      size: 2400,
      built: "1985",
      type: "single",
      history: [
        { date: "1990", price: "800000" },
        { date: "1999", price: "801000" },
        { date: "2000", price: "804000" },
      ],
      schools: [
        { name: "Wilson High", rating: 4 },
        { name: "Washington High", rating: 6 },
      ],
    },
  ];

  console.log("path=" + window.location.href);
  let detailID = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  console.log("detailID=" + detailID);

  const detail = detailListingDatabase.find(({ id }) => id == detailID);
  console.log(detail);

  return (
    <div className="border">
      <h1>{detail.address}</h1>
      <img className="photoDetail" src={detail.photo} />
    </div>
  );
};

export default Details;
