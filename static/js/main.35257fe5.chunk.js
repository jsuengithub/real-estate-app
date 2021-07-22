(this["webpackJsonpreal-estate-app"]=this["webpackJsonpreal-estate-app"]||[]).push([[0],{22:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var i=s(1),o=s.n(i),c=s(14),n=s.n(c),r=(s(22),s(17)),a=s(0);var d=function(e){var t=e.price,s=e.address,i=e.summary,o=e.photo,c=e.onClick;console.log({photo:o});var n="$"+t.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");return Object(a.jsxs)("div",{className:"container",onClick:c,children:[Object(a.jsx)("img",{className:"photo",src:o}),Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:i}),Object(a.jsx)("p",{children:s})]})]})},l=function(e){var t=e.listing,s=e.onClick;return Object(a.jsx)("div",{className:"grid",children:t.map((function(e){return Object(a.jsx)(d,{className:"grid",price:e.price,summary:e.summary,address:e.address,photo:e.photo,onClick:function(){return s(e.id)}})}))})},h=function(){console.log("path="+window.location.href);var e=window.location.href.substring(window.location.href.lastIndexOf("/")+1);console.log("detailID="+e);var t=[{id:1,address:"1234 A St",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/424/40957424_1.jpg",price:9e5,bedrooms:4,baths:3,size:2500,built:"1985",type:"single",history:[{date:"1990",price:"800000"},{date:"1999",price:"801000"},{date:"2000",price:"804000"}],schools:[{name:"Wilson High",rating:4},{name:"Washington High",rating:6}]},{id:2,address:"452 First St",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/724/40959724_0.jpg",price:932e3,bedrooms:3,baths:2.5,size:1700,built:"1985",type:"single",history:[{date:"1990",price:"800000"},{date:"1999",price:"801000"},{date:"2000",price:"804000"}],schools:[{name:"Wilson High",rating:4},{name:"Washington High",rating:6}]},{id:3,address:"33029 ELm St",photo:"https://ssl.cdn-redfin.com/photo/27/bigphoto/113/321066113_0.jpg",price:12e5,detail:"4 Beds  3 Baths  2000 Sq.Ft.",bedrooms:4,baths:3,size:2e3,built:"1985",type:"single",history:[{date:"1990",price:"800000"},{date:"1999",price:"801000"},{date:"2000",price:"804000"}],schools:[{name:"Wilson High",rating:4},{name:"Washington High",rating:6}]},{id:4,address:"4087 Sand Ave",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/613/40956613_0.jpg",price:78e4,detail:"3 Beds  2 Baths  1400 Sq.Ft.",bedrooms:3,baths:2,size:1400,built:"1985",type:"single",history:[{date:"1990",price:"800000"},{date:"1999",price:"801000"},{date:"2000",price:"804000"}],schools:[{name:"Wilson High",rating:4},{name:"Washington High",rating:6}]},{id:5,address:"9833 15th St",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/190/40951190_3.jpg",price:16e5,detail:"4 Beds  3 Baths  2400 Sq.Ft.",bedrooms:4,baths:3,size:2400,built:"1985",type:"single",history:[{date:"1990",price:"800000"},{date:"1999",price:"801000"},{date:"2000",price:"804000"}],schools:[{name:"Wilson High",rating:4},{name:"Washington High",rating:6}]}].find((function(t){return t.id==e}));return console.log(t),Object(a.jsxs)("div",{className:"border",children:[Object(a.jsx)("h1",{children:t.address}),Object(a.jsx)("img",{className:"photoDetail",src:t.photo})]})},p=function(){return Object(a.jsxs)("form",{className:"flex-container",children:[Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{children:"SEARCH FOR HOMES"}),Object(a.jsx)("input",{type:"text",placeholder:"City, Zip or Address"})]}),Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{children:"PRICE"}),Object(a.jsx)("input",{type:"text",placeholder:"Price"})]}),Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{children:"Beds"}),Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{value:"0",children:"Any"}),Object(a.jsx)("option",{value:"1",children:"1+ Beds"}),Object(a.jsx)("option",{value:"2",children:"2+ Beds"}),Object(a.jsx)("option",{value:"3",children:"3+ Beds"}),Object(a.jsx)("option",{value:"4",children:"4+ Beds"}),Object(a.jsx)("option",{value:"5",children:"5+ Beds"})]})]}),Object(a.jsxs)("div",{className:"form-control",children:[Object(a.jsx)("label",{children:"Baths"}),Object(a.jsxs)("select",{children:[Object(a.jsx)("option",{value:"0",children:"Any"}),Object(a.jsx)("option",{value:"1",children:"1+ Baths"}),Object(a.jsx)("option",{value:"2",children:"2+ Baths"}),Object(a.jsx)("option",{value:"3",children:"3+ Baths"}),Object(a.jsx)("option",{value:"4",children:"4+ Baths"}),Object(a.jsx)("option",{value:"5",children:"5+ Baths"})]})]}),Object(a.jsx)("input",{className:"btn btn-block",type:"sumbit",value:"SEARCH"})]})},j=s(15),b=s(2),g=function(){var e=Object(i.useState)([{id:1,address:"1234 A St",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/424/40957424_1.jpg",price:9e5,summary:"4 Beds  3 Baths  2500 Sq.Ft."},{id:2,address:"452 First St",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/724/40959724_0.jpg",price:932e3,summary:"3 Beds  2.5 Baths  1700 Sq.Ft."},{id:3,address:"33029 ELm St",photo:"https://ssl.cdn-redfin.com/photo/27/bigphoto/113/321066113_0.jpg",price:12e5,summary:"4 Beds  3 Baths  2000 Sq.Ft."},{id:4,address:"4087 Sand Ave",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/613/40956613_0.jpg",price:78e4,summary:"3 Beds  2 Baths  1400 Sq.Ft."},{id:5,address:"9833 15th St",photo:"https://ssl.cdn-redfin.com/photo/10/bigphoto/190/40951190_3.jpg",price:16e5,summary:"4 Beds  3 Baths  2400 Sq.Ft."}]),t=Object(r.a)(e,2),s=t[0],o=(t[1],function(e){console.log("set id = "+e),window.open("/details/"+e)});return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"header",children:" Real Estate App"}),Object(a.jsx)(b.a,{path:"/",exact:!0,render:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(l,{listing:s,onClick:o})]})}}),Object(a.jsx)(b.a,{path:"/details",component:h}),Object(a.jsx)("h4",{className:"footer",children:"Copyright \xa92021"})]})})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,30)).then((function(t){var s=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),o(e),c(e),n(e)}))};n.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),m()}},[[29,1,2]]]);
//# sourceMappingURL=main.35257fe5.chunk.js.map