var sha256 = require("crypto-js/sha256");
import sha256 from "crypto-js/sha256";
import hexEnc from "crypto-js/enc-hex";

export const getScriptHash = (scriptPubKeyHex) => {
  var scriptHash = hexEnc.stringify(sha256(hexEnc.parse(scriptPubKeyHex)));
  return scriptHash.match(/.{2}/g).reverse().join("");
};
