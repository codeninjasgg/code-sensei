const fs = require("fs");
const bookmarklet = require("bookmarklet"); // https://github.com/mrcoles/bookmarklet

fs.readFile("./app.js", "utf8", (error, content) => {
  if (error !== null) {
    throw new Error(error);
  }
  const { code, options } = bookmarklet.parseFile(content);
  const dist = bookmarklet.convert(code, options);
  fs.writeFile("bookmarklet.txt", dist, undefined, () => {
    console.log(`Here is your bookmarklet:\n${dist}`);
  });
});
