import Listing from "./components/Listing";
import Details from "./components/Details";
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useContext } from "react";
import { useState } from "react";

const App = () => {
  /* TODO: Implement the search API (POST /properties?size=1234&zip=94404&pricelessthan=1000000) to
   retreive the listing.  For now, just hardcode something here*/
  const [listing, setListing] = useState([
    {
      id: 1,
      address: "1234 A St",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/424/40957424_1.jpg",
      price: 900000,
      summary: "4 Beds  3 Baths  2500 Sq.Ft.",
    },
    {
      id: 2,
      address: "452 First St",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/724/40959724_0.jpg",
      price: 932000,
      summary: "3 Beds  2.5 Baths  1700 Sq.Ft.",
    },
    {
      id: 3,
      address: "33029 ELm St",
      photo: "https://ssl.cdn-redfin.com/photo/27/bigphoto/113/321066113_0.jpg",
      price: 1200000,
      summary: "4 Beds  3 Baths  2000 Sq.Ft.",
    },
    {
      id: 4,
      address: "4087 Sand Ave",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/613/40956613_0.jpg",
      price: 780000,
      summary: "3 Beds  2 Baths  1400 Sq.Ft.",
    },
    {
      id: 5,
      address: "9833 15th St",
      photo: "https://ssl.cdn-redfin.com/photo/10/bigphoto/190/40951190_3.jpg",
      price: 1600000,
      summary: "4 Beds  3 Baths  2400 Sq.Ft.",
    },
  ]);

  // Open a detailed view
  const showDetails = (id) => {
    console.log("set id = " + id);
    window.open("/details/" + id);
  };

  return (
    <Router>
      <div>
        <h1 className="header"> Real Estate App</h1>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Search></Search>
              <Listing listing={listing} onClick={showDetails} />
            </>
          )}
        ></Route>
        <Route path="/details" component={Details}></Route>
        <h4 className="footer">Copyright &copy;2021</h4>
      </div>
    </Router>
  );
};

export default App;
