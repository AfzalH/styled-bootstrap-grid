"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var css = {
  col: {
    true: "\n      -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n      max-width: 100%;\n    ",
    auto: "\n      -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n      width: auto;\n      max-width: none;\n    ",
    1: "\n      -ms-flex: 0 0 8.333333%;\n      flex: 0 0 8.333333%;\n      max-width: 8.333333%;\n    ",
    2: "\n      -ms-flex: 0 0 16.666667%;\n      flex: 0 0 16.666667%;\n      max-width: 16.666667%;\n    ",
    3: "\n      -ms-flex: 0 0 25%;\n      flex: 0 0 25%;\n      max-width: 25%;\n        ",
    4: "\n      -ms-flex: 0 0 33.333333%;\n      flex: 0 0 33.333333%;\n      max-width: 33.333333%;\n        ",
    5: "\n      -ms-flex: 0 0 41.666667%;\n      flex: 0 0 41.666667%;\n      max-width: 41.666667%;\n        ",
    6: "\n      -ms-flex: 0 0 50%;\n      flex: 0 0 50%;\n      max-width: 50%;\n    ",
    7: "\n      -ms-flex: 0 0 58.333333%;\n      flex: 0 0 58.333333%;\n      max-width: 58.333333%;\n    ",
    8: "\n      -ms-flex: 0 0 66.666667%;\n      flex: 0 0 66.666667%;\n      max-width: 66.666667%;\n    ",
    9: "\n      -ms-flex: 0 0 75%;\n      flex: 0 0 75%;\n      max-width: 75%;\n    ",
    10: "\n      -ms-flex: 0 0 83.333333%;\n      flex: 0 0 83.333333%;\n      max-width: 83.333333%;\n    ",
    11: "\n      -ms-flex: 0 0 91.666667%;\n      flex: 0 0 91.666667%;\n      max-width: 91.666667%;\n    ",
    12: "\n      -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n      max-width: 100%;\n    "
  },
  offset: {
    0: 'margin-left: 0;',
    1: 'margin-left: 8.333333%;',
    2: 'margin-left: 16.666667%;',
    3: 'margin-left: 25%;',
    4: 'margin-left: 33.333333%;',
    5: 'margin-left: 41.666667%;',
    6: 'margin-left: 50%;',
    7: 'margin-left: 58.333333%;',
    8: 'margin-left: 66.666667%;',
    9: 'margin-left: 75%;',
    10: 'margin-left: 83.333333%;',
    11: 'margin-left: 91.666667%;'
  },
  order: {
    first: "\n      -ms-flex-order: -1;\n      order: -1;\n    ",
    last: "\n      -ms-flex-order: 13;\n      order: 13;\n    ",
    0: "\n      -ms-flex-order: 0;\n      order: 0;\n    ",
    1: "\n      -ms-flex-order: 1;\n      order: 1;\n    ",
    2: "\n      -ms-flex-order: 2;\n      order: 2;\n    ",
    3: "\n      -ms-flex-order: 3;\n      order: 3;\n    ",
    4: "\n      -ms-flex-order: 4;\n      order: 4;\n    ",
    5: "\n      -ms-flex-order: 5;\n      order: 5;\n    ",
    6: "\n      -ms-flex-order: 6;\n      order: 6;\n    ",
    7: "\n      -ms-flex-order: 7;\n      order: 7;\n    ",
    8: "\n      -ms-flex-order: 8;\n      order: 8;\n    ",
    9: "\n      -ms-flex-order: 9;\n      order: 9;\n    ",
    10: "\n      -ms-flex-order: 10;\n      order: 10;\n    ",
    11: "\n      -ms-flex-order: 11;\n      order: 11;\n    ",
    12: "\n      -ms-flex-order: 12;\n      order: 12;\n    "
  },
  alignSelf: {
    auto: "\n      -ms-flex-item-align: auto !important;\n      align-self: auto !important;\n    ",
    start: "\n      -ms-flex-item-align: start !important;\n      align-self: flex-start !important;\n    ",
    end: "\n      -ms-flex-item-align: end !important;\n      align-self: flex-end !important;\n    ",
    center: "\n      -ms-flex-item-align: center !important;\n      align-self: center !important;\n    ",
    baseline: "\n      -ms-flex-item-align: baseline !important;\n      align-self: baseline !important;\n    ",
    stretch: "\n      -ms-flex-item-align: stretch !important;\n      align-self: stretch !important;\n    "
  },
  display: {
    none: "\n      display: none;\n    "
  },
  noGutter: "\n    padding-right: 0;\n    padding-left: 0;\n  "
};
var _default = css;
exports.default = _default;