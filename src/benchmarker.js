/*
 * dev-tools : benchmarker
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

//var measures = []

var SETTINGS = {
  PRECISION: 6
}

const setPrecision = function (value = 6) {
  if (value >= 1) {
    SETTINGS.PRECISION = value
  }
}

const getPrecision = function () {
  return SETTINGS.PRECISION
}

const measure = function (callback = Function()) {

  const startAt = process.hrtime()

  callback()

  const diff = process.hrtime(startAt)
  const deltatime = parseFloat((diff[0] * 1e3 + diff[1] * 1e-6).toFixed(SETTINGS.PRECISION))
  //measures.push(deltatime)
  return deltatime
}

const compare = function (callback1 = Function(), callback2 = Function(), limit = 10) {
  let result = {
    measures: [],
    points: {
      a: 0,
      b: 0
    }
  }

  for (let i = 0; i < limit + 1; i++) {
    var res = {
      a: 0,
      b: 0
    }
    res.a = measure(callback1)
    res.b = measure(callback2)
    result.measures.push(res)
  }
  result.measures.shift();

  result.measures.forEach(e => {
    if (e.a < e.b) {
      result.points.a++
    }
    if (e.b < e.a) {
      result.points.b++
    }
  });

  return result
}

// setTimeout(() => {
//   console.log(measure(callback))
// }, 1000);

module.exports = {
  getPrecision,
  setPrecision,
  measure,
  compare
}
