# npm-available-array [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/npm-available-array.svg)](https://www.npmjs.com/package/npm-available-array) [![Downloads](https://img.shields.io/npm/dt/npm-available-array.svg)](https://www.npmjs.com/package/npm-available-array) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Having an array of package names, check which ones are available on npm.

## Installation

```sh
$ npm i --save npm-available-array
```

## Example

```js
const available = require("npm-available-array");

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
```

## Documentation

### `availableArray(input, callback)`
Check if the package names are available on npm.

#### Params
- **Array** `input`: An array of strings representing npm package names.
- **Function** `callback`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`namly`](https://github.com/IonicaBizau/namly#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md