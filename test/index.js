'use strict'

const should = require('should')

const LRURAM = require('..')

describe('lru ram', function () {
  it('provide size in bytes', function () {
    const totalBytes = 2147483648 // 2GB

    const obj = {
      'status': 'success',
      'data': {
        'url': 'https://www.youtube.com/watch?v=GDRd-BFTYIg', 'author': 'Andrew Jrt', 'date': '2017-07-07T00:00:00.000Z', 'description': '👍 Subscribe - http://bit.do/AndrewJRT 🐦 Twitter - https://twitter.com/andrew_jrt 🎮 Twitch - https://twitch.tv/andrewjrt ❤ Patreon - https://www.patreon.com/a...', 'image': 'https://i.ytimg.com/vi/GDRd-BFTYIg/maxresdefault.jpg', 'publisher': 'YouTube', 'title': 'Overwatch - Huge Massive Fist Punch Man'
      }
    }

    const length = LRURAM(obj, totalBytes)
    should(length).be.a.Number()
    should(length).be.equal(2697844)
  })

  it('provide size in human bytes', function () {
    const totalBytes = '2GB'

    const obj = {
      'status': 'success',
      'data': {
        'url': 'https://www.youtube.com/watch?v=GDRd-BFTYIg', 'author': 'Andrew Jrt', 'date': '2017-07-07T00:00:00.000Z', 'description': '👍 Subscribe - http://bit.do/AndrewJRT 🐦 Twitter - https://twitter.com/andrew_jrt 🎮 Twitch - https://twitch.tv/andrewjrt ❤ Patreon - https://www.patreon.com/a...', 'image': 'https://i.ytimg.com/vi/GDRd-BFTYIg/maxresdefault.jpg', 'publisher': 'YouTube', 'title': 'Overwatch - Huge Massive Fist Punch Man'
      }
    }

    const length = LRURAM(obj, totalBytes)
    should(length).be.a.Number()
    should(length).be.equal(2697844)
  })
})
