import { Router } from "express";
import { hex2ascii } from "../utils/generic.js";
const router = Router();

/*
An example of using the the woc-api to get an ordered list of UTXOs for a given
script then outputting the json response using html in a pretty format

Example http://localhost:3000/script-decode/main/unspent/d47215e97b4c4e5c69c48da818253f4ef985e493f7506915bfd9b1d1df9023fd
*/
router.get("/:network/unspent/:hash", async function (req, res, next) {
  const hash = req.params.hash;
  const network = req.params.network;
  //Select the correct api url based on network
  const wocApiUrl = process.env[`${network}_WOC_API_URL`.toUpperCase()];

  try {
    //Fetch the UTXOs for a given script hash using the woc-api
    const response = await fetch(`${wocApiUrl}/script/${hash}/unspent`);
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
