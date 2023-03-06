import { Router } from "express";
import { hex2ascii } from "../utils/generic.js";
import { getNeonTemplate } from "../templates/getNeonTemplate.js";
const router = Router();

/*
An example of rendering the hex from the vout converted to ascii using a neon light themed template

Example http://localhost:3000/data-decode/main/ascii/92546b1797a7c4a00cd6bcf85771e66c1e2050514ed75e591d9b230982cf77a5/1
*/
router.get("/:network/ascii/:hash/:voutindex", async function (req, res, next) {
  const hash = req.params.hash;
  const voutindex = req.params.voutindex;
  const network = req.params.network;
  //Select the correct api url based on network
  const wocApiUrl = process.env[`${network}_WOC_API_URL`.toUpperCase()];

  try {
    //Fetch block from information using hash
    const response = await fetch(`${wocApiUrl}/tx/hash/${hash}`);
    const data = await response.json();

    //Get hex using the voutindex
    const hex = data?.vout[voutindex]?.scriptPubKey?.hex;
    res.set("Content-Type", "text/html");
    //Render ascii output of the hex using the neon light themed template
    res.send(Buffer.from(getNeonTemplate(hex2ascii(hex))));
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: "Failed to render page",
    });
  }
});

export default router;
