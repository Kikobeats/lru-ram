# lru-ram

![Last version](https://img.shields.io/github/tag/Kikobeats/lru-ram.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/lru-ram/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/lru-ram)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/lru-ram.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/lru-ram)
[![Dependency status](https://img.shields.io/david/Kikobeats/lru-ram.svg?style=flat-square)](https://david-dm.org/Kikobeats/lru-ram)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/lru-ram.svg?style=flat-square)](https://david-dm.org/Kikobeats/lru-ram#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/lru-ram.svg?style=flat-square)](https://www.npmjs.org/package/lru-ram)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Calculate the size of your LRU cache in bytes.

I created this tiny module for be easy connect with [whatever LRU implementation](https://github.com/dominictarr/bench-lru).

An LRU needs a max number of elements to keep inside the cache. 

The idea behind this module is provide an estimate of this value based on a representative element to keep inside the cache and the quantity of memory (in bytes).

## Install

```bash
$ npm install lru-ram --save
```

## Usage

```js
const lruRam = require('lru-ram')
const os = require('os')

// total memory of your cache
const totalBytes = os.totalmem() * 0.8

// a representative element of your cache
const value = {foo: 'bar', hello: 'world'}

// The library calculate the number total of items
const size = lruRam(value, totalBytes)
```

Then, you can use the calculated number in your favorite LRU implementation, for example:

```js
const lruRam = require('lru-ram')
const LRU = require('lru')
const os = require('os')

// total memory of your cache
const totalBytes = os.totalmem() * 0.8

// a representative element of your cache
const value = {foo: 'bar', hello: 'world'}

// The library calculate the number total of items
const size = lruRam(value, totalBytes)
const cache = new LRU(size)
```

You can specify quantity of bytes in human bytes as well:

```js
const lruRam = require('lru-ram')
const value = {foo: 'bar', hello: 'world'}
const size = lruRam(value, '2GB')
```

## API

### lruRam(value, totalBytes)

#### value

*Required*<br>
Type: `object`

A representative element of your cache.

We use this value for calculate the size in bytes per each element.

#### totalBytes

*Required*<br>
Type: `Integer`

Total of bytes available for the cache.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
