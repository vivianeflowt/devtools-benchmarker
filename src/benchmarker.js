/*
 * dev-tools : benchmarker
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

var measures = []

var SETTINGS = {
  PRECISION: 6
}

const clearMeasures = function () {
  measures = []
}

const getMeasures = function () {
  return measures
}

const setPrecision = function (value = 6) {
  if (value >= 1) {
    SETTINGS.PRECISION = value
  }
}

const getPrecision = function () {
  return SETTINGS.PRECISION
}

const measure = function (somefunction = Function()) {

  const startAt = process.hrtime()

  somefunction()

  const diff = process.hrtime(startAt)
  const deltatime = parseFloat((diff[0] * 1e3 + diff[1] * 1e-6).toFixed(SETTINGS.PRECISION))
  measures.push(deltatime)
  return deltatime
}

const smartMeasure = function (somefunction = Function(), timeout = 1000) {
  setTimeout(() => {
    console.log(measure(somefunction))
  }, timeout);
}

module.exports = {
  getMeasures,
  clearMeasures,
  getPrecision,
  setPrecision,
  measure
}
