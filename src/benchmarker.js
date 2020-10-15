/*
 * dev-tools : benchmarker
 * Copyright(c) 2020 Viviane Florido.
 * Licensed under the MIT license.
 */

const benchmarker = (somefunction, opt = {}) => {

  if (somefunction === undefined) {
    return false
  }

  opt.times = opt.times || 1
  opt.precision = opt.precision || 8

  const startAt = process.hrtime()

  let i = 0

  while (i < opt.times) {
    somefunction()
    i++
  }

  const diff = process.hrtime(startAt);

  const time = diff[0] * 1e3 + diff[1] * 1e-6;

  return time
}

module.exports.benchmarker = benchmarker
