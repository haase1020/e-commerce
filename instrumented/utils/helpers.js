function cov_2i33fxzyyi() {
  var path = "/home/mandi/mandi/e-commerce/src/utils/helpers.js";
  var hash = "b1ba3b035c1a790478339877174b7d82d4d9a728";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/mandi/mandi/e-commerce/src/utils/helpers.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 27
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "2": {
        start: {
          line: 8,
          column: 31
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "3": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 45
        }
      },
      "4": {
        start: {
          line: 9,
          column: 34
        },
        end: {
          line: 9,
          column: 44
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 27
        }
      },
      "7": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 27
          },
          end: {
            line: 1,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1,
            column: 39
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 31
          },
          end: {
            line: 8,
            column: 32
          }
        },
        loc: {
          start: {
            line: 8,
            column: 47
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 25
          }
        },
        loc: {
          start: {
            line: 9,
            column: 34
          },
          end: {
            line: 9,
            column: 44
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b1ba3b035c1a790478339877174b7d82d4d9a728"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2i33fxzyyi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2i33fxzyyi();
cov_2i33fxzyyi().s[0]++;
export const formatPrice = number => {
  cov_2i33fxzyyi().f[0]++;
  cov_2i33fxzyyi().s[1]++;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(number / 100);
};
cov_2i33fxzyyi().s[2]++;
export const getUniqueValues = (data, type) => {
  cov_2i33fxzyyi().f[1]++;
  let unique = (cov_2i33fxzyyi().s[3]++, data.map(item => {
    cov_2i33fxzyyi().f[2]++;
    cov_2i33fxzyyi().s[4]++;
    return item[type];
  }));
  cov_2i33fxzyyi().s[5]++;

  if (type === "colors") {
    cov_2i33fxzyyi().b[0][0]++;
    cov_2i33fxzyyi().s[6]++;
    unique = unique.flat();
  } else {
    cov_2i33fxzyyi().b[0][1]++;
  }

  cov_2i33fxzyyi().s[7]++;
  return ["all", ...new Set(unique)];
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiXSwibmFtZXMiOlsiZm9ybWF0UHJpY2UiLCJudW1iZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImdldFVuaXF1ZVZhbHVlcyIsImRhdGEiLCJ0eXBlIiwidW5pcXVlIiwibWFwIiwiaXRlbSIsImZsYXQiLCJTZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixPQUFPLE1BQU1BLFdBQVcsR0FBSUMsTUFBRCxJQUFZO0FBQUE7QUFBQTtBQUNyQyxTQUFPLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNwQ0MsSUFBQUEsS0FBSyxFQUFFLFVBRDZCO0FBRXBDQyxJQUFBQSxRQUFRLEVBQUU7QUFGMEIsR0FBL0IsRUFHSkMsTUFISSxDQUdHTCxNQUFNLEdBQUcsR0FIWixDQUFQO0FBSUQsQ0FMTTs7QUFPUCxPQUFPLE1BQU1NLGVBQWUsR0FBRyxDQUFDQyxJQUFELEVBQU9DLElBQVAsS0FBZ0I7QUFBQTtBQUM3QyxNQUFJQyxNQUFNLDZCQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBVUMsSUFBRCxJQUFVO0FBQUE7QUFBQTtBQUFBLFdBQUFBLElBQUksQ0FBQ0gsSUFBRCxDQUFKO0FBQVUsR0FBN0IsQ0FBSCxDQUFWO0FBRDZDOztBQUU3QyxNQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUFBO0FBQUE7QUFDckJDLElBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDRyxJQUFQLEVBQVQ7QUFDRCxHQUZEO0FBQUE7QUFBQTs7QUFGNkM7QUFLN0MsU0FBTyxDQUFDLEtBQUQsRUFBUSxHQUFHLElBQUlDLEdBQUosQ0FBUUosTUFBUixDQUFYLENBQVA7QUFDRCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZvcm1hdFByaWNlID0gKG51bWJlcikgPT4ge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gIH0pLmZvcm1hdChudW1iZXIgLyAxMDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVuaXF1ZVZhbHVlcyA9IChkYXRhLCB0eXBlKSA9PiB7XG4gIGxldCB1bmlxdWUgPSBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbVt0eXBlXSk7XG4gIGlmICh0eXBlID09PSBcImNvbG9yc1wiKSB7XG4gICAgdW5pcXVlID0gdW5pcXVlLmZsYXQoKTtcbiAgfVxuICByZXR1cm4gW1wiYWxsXCIsIC4uLm5ldyBTZXQodW5pcXVlKV07XG59O1xuIl19