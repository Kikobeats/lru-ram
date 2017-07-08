'use strict'

const sizeof = require('object-sizeof')
const round = require('lodash.round')
const toBytes = require('bytes').parse

const isString = str => typeof str === 'string'

module.exports = (value, bytes) => {
  const totalBytes = isString(bytes) ? toBytes(bytes) : bytes
  const size = totalBytes / sizeof(value)
  return round(size)
}
