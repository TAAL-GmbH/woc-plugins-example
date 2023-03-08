import { Router } from "express";
const router = Router();

// dummy order example
const dummyOrders = [
  {
    address: {
      title: "Home",
      name: "john",
      flatNumber: 115,
      street: "Brighton Road",
      locality: "Brighton",
    },
    grandTotal: 7000,
    products: [
      {
        images: ["iPhone.jpg"],
        name: "iPhone",
        salePrice: 2000,
        units: 2,
      },
      {
        images: ["Mac.jpg"],
        name: "Mac pro",
        salePrice: 5000,
        units: 1,
      },
    ],
    status: "Delivered",
    delivery_status: "Unassigned",
    createdAt: "Nov 3, 2020 3:49 PM",
    txid: "f41017df5ca004db45ef287a7c7511661a271d70cf309dd65bba633bf5df3dc6",
  },
  {
    address: {
      title: "office",
      name: "simon",
      flatNumber: 1,
      street: "Oxford Road",
      locality: "London",
    },
    grandTotal: 1000,
    products: [
      {
        images: ["Lamp.jpg"],
        name: "Lamp",
        salePrice: 20,
        units: 1,
      },
    ],
    status: "Delivered",
    delivery_status: "Unassigned",
    createdAt: "Nov 3, 2020 3:49 PM",
    txid: "99addd00af9c2719c41f2c1ec0eb0e45eaa32f343394f7bed2039459218cdc0a",
  },
];

/*
An example using dummy data to do a search for an order based on name.
then outputting the json response using html in a pretty format

Example http://localhost:3000/search-decode/main/order/simon
*/
router.get("/order/:term", async function (req, res, next) {
  const term = req.params.term;
  //look for an order based on tx id other return a not found message
  const order = dummyOrders.find((order) => order.address.name == term);
  if (order) {
    res.set("Content-Type", "text/html");
    //Render the json out as html in a pretty format
    res.send(
      Buffer.from(`<pre>"${JSON.stringify(order, undefined, 2)}"</pre>`)
    );
  } else {
    res.send("Order not found");
  }
});

export default router;
