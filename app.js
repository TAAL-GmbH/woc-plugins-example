import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import pretty from "express-prettify";
import txRouter from "./routes/tx.js";
import blockRouter from "./routes/block.js";
import dataRouter from "./routes/data.js";
import addressRouter from "./routes/address.js";
import scriptRouter from "./routes/script.js";
import searchRouter from "./routes/search.js";

const app = express();
app.use(pretty({ query: "pretty" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//root path for address decoders
app.use("/address-decode", addressRouter);
//root path for tx decoders
app.use("/tx-decode", txRouter);
//root path for block decoders
app.use("/block-decode", blockRouter);
//root path for data decoders
app.use("/data-decode", dataRouter);
//root path for script decoders
app.use("/script-decode", scriptRouter);
//root path for search decoders
app.use("/search-decode", searchRouter);

app.listen(3000);
