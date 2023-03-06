import { Router } from "express";
const router = Router();

/*
An example of using the the woc-api to get the balance information for a given
address then outputting the json response using html in a pretty format

Example http://localhost:3000/address-decode/main/balance/15H8GUb7vstXFXpu6oBwZYBTZ1nbzHrn3n
*/
router.get("/:network/balance/:address", async function (req, res, next) {
  const address = req.params.address;
  const network = req.params.network;
  //Select the correct api url based on network
  const wocApiUrl = process.env[`${network}_WOC_API_URL`.toUpperCase()];
  try {
    //Fetch the balance for the given address using the woc-api
    const response = await fetch(`${wocApiUrl}/address/${address}/balance`);
    const data = await response.json();

    res.set("Content-Type", "text/html");
    //Render the json out as html in a pretty format
    res.send(Buffer.from(`<pre>"${JSON.stringify(data, undefined, 2)}"</pre>`));
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: "Failed to render page",
    });
  }
});

export default router;
