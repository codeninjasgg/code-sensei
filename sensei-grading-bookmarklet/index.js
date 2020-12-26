// https://github.com/mrcoles/bookmarklet
const fs = require("fs");
const bookmarklet = require("bookmarklet");

fs.readFile("./app.js", "utf8", (error, content) => {
  if (error !== null) {
    throw new Error(error);
  }
  const { code, options } = bookmarklet.parseFile(content);
  const dist = bookmarklet.convert(code, options);
  console.log(`Here is your bookmarklet:\n${dist}`);
});
