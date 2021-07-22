import React from "react";

const Search = () => {
  return (
    <form className="flex-container">
      <div className="form-control">
        <label>SEARCH FOR HOMES</label>
        <input type="text" placeholder="City, Zip or Address"></input>
      </div>
      <div className="form-control">
        <label>PRICE</label>
        <input type="text" placeholder="Price"></input>
      </div>
      <div className="form-control">
        <label>Beds</label>
        <select>
          <option value="0">Any</option>
          <option value="1">1+ Beds</option>
          <option value="2">2+ Beds</option>
          <option value="3">3+ Beds</option>
          <option value="4">4+ Beds</option>
          <option value="5">5+ Beds</option>
        </select>
      </div>
      <div className="form-control">
        <label>Baths</label>
        <select>
          <option value="0">Any</option>
          <option value="1">1+ Baths</option>
          <option value="2">2+ Baths</option>
          <option value="3">3+ Baths</option>
          <option value="4">4+ Baths</option>
          <option value="5">5+ Baths</option>
        </select>
      </div>

      <input className="btn btn-block" type="sumbit" value="SEARCH"></input>
    </form>
  );
};

export default Search;
