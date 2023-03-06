export const cleanString = (str) => {
  if (str.startsWith("006a")) {
    str = str.slice(4);
  } else {
    str = str.slice(72);
  }
  return str.slice(28).replace(/01/g, "");
};

export const hex2ascii = (hex, txId) => {
  if (
    txId === "4ec3b63d764558303eda720e8e51f69bbcfe81376075657313fb587306f8a9b0"
  ) {
    return Buffer.from(cleanString(hex), "hex").toString();
  }

  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
};
