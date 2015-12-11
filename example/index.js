const available = require("../lib");

// Check these packages
available([
    "gridly"
  , "image-to-ascii"
  , "some-package-that-does-not-exist"
], (err, result) => {
    console.log(err || result);
    // =>
    // [ { name: 'gridly', available: false },
    //   { name: 'image-to-ascii', available: false },
    //   { name: 'some-package-that-does-not-exist', available: true } ]
});
