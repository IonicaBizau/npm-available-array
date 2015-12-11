const npmAvailable = require("npm-available")
    , sameTime = require("same-time")
    , bindy = require("bindy")
    ;

/*!
 * available
 *
 * @name available
 * @function
 * @param {String} name The package name.
 * @param {Function} callback The callback function.
 */
function available(name, callback) {
    npmAvailable(name, (err, av) => {
        callback(err, {
            name: name
          , available: av
        });
    });
}

/**
 * availableArray
 * Check if the package names are available on npm.
 *
 * @name availableArray
 * @function
 * @param {Array} input An array of strings representing npm package names.
 * @param {Function} callback The callback function.
 */
function availableArray(input, callback) {
    sameTime(bindy(input, available), callback);
}

module.exports = availableArray;
