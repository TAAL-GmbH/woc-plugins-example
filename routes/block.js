import { Router } from "express";
import prettytMs from "pretty-ms";
import { getAnimTemplate } from "../templates/getAnimTemplate.js";
import { getNeonTemplate } from "../templates/getNeonTemplate.js";
const router = Router();

/*
An example of rendering the block hash into 3d animation using a client side webgl called three.js

Example http://localhost:3000/block-decode/main/anim/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11
*/
router.get("/:network/anim/:block", async function (req, res, next) {
  const block = req.params.block;
  res.set("Content-Type", "text/html");
  //Render the template using the hash
  res.send(Buffer.from(getAnimTemplate(block, 20)));
});

/*
An example showing the time of the block mined since the genesis block using a neon light themed template

Example http://localhost:3000/block-decode/main/time/0000000000000000017480fc53fbcd60107d0d5e35d2ec2ed6d11ed484087b11
*/
router.get("/:network/time/:hash", async function (req, res, next) {
  const hash = req.params.hash;
  const network = req.params.network;
  //Select the correct api url based on network
  const wocApiUrl = process.env[`${network}_WOC_API_URL`.toUpperCase()];
  try {
    // Fetch the block information from the woc-api
    const response = await fetch(`${wocApiUrl}/block/hash/${hash}`);
    const data = await response.json();
    //The actual time genesis block was mined
    const GENESIS_BLOCK_TIME = 1231006505;
    //The difference between the block and the genesis block time
    const timeDiff = data.time - GENESIS_BLOCK_TIME;
    //Prettify the output of the time difference so its more user friendly
    //As its a unix time its in seconds. The methos requires it be in milliseconds so
    //we multiply by a 1000
    const uptime = prettytMs(timeDiff * 1000);
    res.set("Content-Type", "text/html");
    //Render the time using a html template themed around a neon light colour
    res.send(
      Buffer.from(
        getNeonTemplate(`<p>Time since first mined block</p>${uptime}`)
      )
    );
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: "Failed to render page",
    });
  }
});

export default router;
