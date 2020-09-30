const { Readable } = require("stream");
const readableableStream = new Readable();

readableableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
readableableStream.push(null);

readableableStream.pipe(process.stdout);