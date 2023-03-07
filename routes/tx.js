import { Router } from "express";
import { faker } from "@faker-js/faker";
import { Configuration, OpenAIApi } from "openai";
import { getAnimTemplate } from "../templates/getAnimTemplate.js";
const router = Router();

/*
An example of rendering the tx id into a 3d animation using a client side webgl library called three.js

Example http://localhost:3000/tx-decode/main/anim/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11
*/
router.get("/:network/anim/:tx", async function (req, res, next) {
  const tx = req.params.tx;
  res.set("Content-Type", "text/html");
  //Render the animated template
  res.send(Buffer.from(getAnimTemplate(tx, 23)));
});

/*
An example of returning a json dummy order based on a tx. In reality some form integration
to some other service utilising tx hash

Example http://localhost:3000/tx-decode/main/order/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11
*/
router.get("/:network/order/:tx", async function (req, res, next) {
  const tx = req.params.tx;

  // A dummy order with fake user generated each time the endpoint is called
  // In reality you would have an actual integration to real life orders.
  const orderData = {
    address: {
      name: faker.name.fullName(),
      flatNumber: faker.address.buildingNumber(),
      street: faker.address.street(),
      locality: faker.address.city(),
    },
    grandTotal: 7000,
    products: [
      {
        name: faker.commerce.productName(),
        salePrice: faker.commerce.price(),
        units: 2,
      },
      {
        name: faker.commerce.productName(),
        salePrice: faker.commerce.price(),
        units: 1,
      },
    ],
    status: "Delivered",
    createdAt: "Nov 3, 2020 3:49 PM",
    txid: tx,
  };

  res.set("Content-Type", "text/html");
  //Render the json as html in a pretty format
  res.send(
    Buffer.from(`<pre>"${JSON.stringify(orderData, undefined, 2)}"</pre>`)
  );
});

/*
An example of using OpenAI to generate an image based on the transaction id.

Example http://localhost:3000/tx-decode/main/image/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11
*/
router.get("/:network/image/:tx", async function (req, res, next) {
  const tx = req.params.tx;

  const configuration = new Configuration({
    // Requires you to have a an open api key
    // You will need to signup at https://platform.openai.com/signup then
    // login to your account to generate an api key
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const imageSize = "512x512";

  try {
    const response = await openai.createImage({
      //A prompt using txid to generate the image
      prompt: `Show this Transaction id ${tx} as lego blocks`,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.set("Content-Type", "text/html");
    //Returns the generated image
    res.send(Buffer.from(`<img src=${imageUrl}>`));
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });
  }
});

export default router;
