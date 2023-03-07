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

//root path for address type plugin examples
app.use("/address-decode", addressRouter);
//root path for tx type plugin examples
app.use("/tx-decode", txRouter);
//root path for block type plugin examples
app.use("/block-decode", blockRouter);
//root path for data type plugin examples
app.use("/data-decode", dataRouter);
//root path for script type plugin examples
app.use("/script-decode", scriptRouter);
//root path for search type plugin examples
app.use("/search-decode", searchRouter);

app.listen(3000);
