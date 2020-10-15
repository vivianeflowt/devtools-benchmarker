## devtools - benchmarker - developer tool to measure javascript functions execution time

### Install

With [npm](https://npmjs.org/):

```shell
npm install devtools-benchmarker
```

With [yarn](https://yarnpkg.com/en/):

```shell
yarn add devtools-benchmarker
```

### Usage

```js
const benchmarker = require('devtools-benchmarker')

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

// Measure execution time of function
console.log(benchmarker.measure(somefunction))

```

<span> Result: </span> <br />
![example](https://github.com/vivianeflowt/devtools-benchmarker/blob/main/examples/example.png)

### License

MIT
