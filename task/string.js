const fs = require("fs");
const http = require("http");

const readStream = fs.createReadStream("./output.txt", {
  highWaterMark: 64 * 1024,
});

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

const writeStream = fs.createWriteStream("./output.txt", {
  flags: "a",
});
writeStream.write("\nthis is some text");
writeStream.end();

writeStream.on("finish", () => {
  console.log("writing finish");
});
