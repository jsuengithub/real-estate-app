import React from "react";
import Cell from "./Cell";

const Listing = ({ listing, onClick }) => {
  return (
    <div className="grid">
      {listing.map((item) => (
        <Cell
          className="grid"
          price={item.price}
          summary={item.summary}
          address={item.address}
          photo={item.photo}
          onClick={() => onClick(item.id)}
        ></Cell>
      ))}
    </div>
  );
};

export default Listing;
