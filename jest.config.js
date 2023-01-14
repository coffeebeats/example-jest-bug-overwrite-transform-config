// Instructions: Uncomment one of these at a time to observe the behavior.

/*
 * This *passes* as expected!
 *
 * NOTE: You can comment out one of the entries to validate that it works as
 * expected.
 */
module.exports = {
  transform: {
    "data/a\\.json": ["./preprocessor.js", { fail: false }],
    "data/b\\.json": ["./preprocessor.js", { fail: false }],
  },
};

/*
 * This *throws* as expected!
 *
 * NOTE: You can comment out one of the entries to validate that it works as
 * expected.
 */

// module.exports = {
//   transform: {
//     "data/a\\.json": ["./preprocessor.js", { fail: true }],
//     "data/b\\.json": ["./preprocessor.js", { fail: true }],
//   },
// };

/*
 * This throws for 'data/a.json' when it shouldn't!
 *
 * NOTE: Both entries must be present for the bug to manifest.
 */

module.exports = {
  transform: {
    "data/a\\.json": ["./preprocessor.js", { fail: false }],
    "data/b\\.json": ["./preprocessor.js", { fail: true }],
  },
};

/*
 * This should throw for 'a.json', but it doesn't!
 *
 * NOTE: Both entries must be present for the bug to manifest.
 */

// module.exports = {
//   transform: {
//     "data/a\\.json": ["./preprocessor.js", { fail: true }],
//     "data/b\\.json": ["./preprocessor.js", { fail: false }],
//   },
// };
