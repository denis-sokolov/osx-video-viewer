'use strict'

const escape = require('escape-html')
const fs = require('fs')
const youtubeId = require('get-youtube-id')
const urlcode = require('urlcode-json')

const byContent = url => {
    if (url.indexOf('youtube.com/') > -1) {
        const params = {
            autohide: 1,
            autoplay: 1,
            cc_load_policy: 0,
            color: 'white',
            iv_load_policy: 3,
            hl: 1,
            // modestbranding: 1,
            // rel: 0,
            showinfo: 0
        }
        return '<iframe src="https://www.youtube.com/embed/' +
            escape(youtubeId(url)) + '?' +
            escape(urlcode.encode(params)) + '">'
    }

    return '<video controls autoplay src="' + escape(url) + '"></video>'
}

module.exports = url => 'data:text/html,' +
    fs.readFileSync(__dirname + '/main.html', 'utf-8') +
    byContent(url)
