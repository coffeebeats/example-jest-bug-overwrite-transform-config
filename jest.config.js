// Instructions: Uncomment one of these at a time to observe the behavior.

/*
 * RESULT: PASS for both 'a.json' and 'b.json'
 *
 * This *passes* as expected!
 *
 * NOTE: You can comment out one of the entries to validate that
 * the test works as expected.
 */
// module.exports = {
//   transform: {
//     "data/a\\.json": ["./preprocessor.js", { fail: false }],
//     "data/b\\.json": ["./preprocessor.js", { fail: false }],
//   },
// };

/*
 * RESULT: FAIL for both 'a.json' and 'b.json'
 *
 * This *throws* as expected!
 *
 * NOTE: You can comment out one of the entries to validate that
 * the test works as expected.
 */
// module.exports = {
//   transform: {
//     "data/a\\.json": ["./preprocessor.js", { fail: true }],
//     "data/b\\.json": ["./preprocessor.js", { fail: true }],
//   },
// };

/*
 * (CURRENT) RESULT: FAIL for both 'a.json' and 'b.json'
 * (EXPECTED) RESULT: FAIL for 'b.json' only
 *
 * This will cause the test to throw when parsing 'a.json'. It
 * should actually succeed on 'a.json' and throw on 'b.json'.
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
 * (CURRENT) RESULT: PASS for both 'a.json' and 'b.json'
 * (EXPECTED) RESULT: FAIL for 'a.json' only
 *
 * This will cause the test to successfully parse both 'a.json'
 * and 'b.json'. It actually should throw on 'a.json' and
 * succeed on 'b.json'.
 *
 * NOTE: Both entries must be present for the bug to manifest.
 */
// module.exports = {
//   transform: {
//     "data/a\\.json": ["./preprocessor.js", { fail: true }],
//     "data/b\\.json": ["./preprocessor.js", { fail: false }],
//   },
// };
