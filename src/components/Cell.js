import React from "react";

const Cell = ({ price, address, summary, photo, onClick }) => {
  console.log({ photo });
  const priceString = currencyFormat(price);

  return (
    <div className="container" onClick={onClick}>
      <img className="photo" src={photo} />
      <div className="text">
        <h2>{priceString}</h2>
        <p>{summary}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

function currencyFormat(num) {
  return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default Cell;
