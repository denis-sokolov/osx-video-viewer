'use strict'

const escape = require('escape-html')
const fs = require('fs')
const parseUrl = require('url').parse

const youtube = require('./youtube')

const byContent = urlString => {
    const url = parseUrl(urlString, true)
    if (url.host.indexOf('youtube.com') > -1)
        return youtube(url)
    return '<video controls autoplay src="' + escape(url) + '"></video>'
}

module.exports = url => 'data:text/html,' +
    fs.readFileSync(__dirname + '/main.html', 'utf-8') +
    byContent(url)
