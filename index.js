'use strict'

const sizeof = require('object-sizeof')
const round = require('lodash.round')

module.exports = (value, totalBytes) => (
  round(totalBytes / sizeof(value))
)
