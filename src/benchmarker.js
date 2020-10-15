/*
 * dev-tools : benchmarker
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

'use strict'

var SETTINGS = {
  PRECISION: 6,
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
  const deltatime = parseFloat(
    (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(SETTINGS.PRECISION)
  )
  return deltatime
}

const measureAvg = function (callback = Function(), execution = 100) {
  var measureList = []
  for (let index = 0; index < execution + 1; index++) {
    measureList.push(measure(callback))
  }
  measureList.shift()
  const sum = measureList.reduce(function (acc, value) {
    return acc + value;
  }, 0)
  return parseFloat((sum / execution).toFixed(SETTINGS.PRECISION))
}

module.exports = {
  getPrecision,
  setPrecision,
  measure,
  measureAvg,
}
