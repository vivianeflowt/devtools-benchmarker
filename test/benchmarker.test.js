const assert = require('assert')
const benchmarker = require('../index')

test('set precision', () => {
    benchmarker.setPrecision(10)
    assert.strictEqual(benchmarker.getPrecision(), 10)
})
