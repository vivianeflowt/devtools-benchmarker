const benchmarker = require('../index')

// Function to Test
const somefunction = function () {
  // Some Complex Things
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      var someComplexCalc = Math.random * 1000 + Math.random * 1000
    }
  }
}

// set precision of measured value
benchmarker.setPrecision(4)

// measure avarage execution time of function
console.log(benchmarker.measureAvg(somefunction), 100)
