#!/usr/bin/env node
'use strict'

const ArgumentParser = require('argparse').ArgumentParser
const parser = new ArgumentParser({
  description: 'Run a video window',
  usage: 'electron cli.js --on-top URL'
})
parser.addArgument(['-t', '--on-top'], {
  action: 'storeTrue', help: 'Always on top'})
parser.addArgument(['-s', '--on-all-spaces'], {
  action: 'storeTrue', help: 'Sticky to all workspaces'})
parser.addArgument(['url'], {
  help: 'URL to the video file or YouTube'})
const args = parser.parseArgs()

const app = require('./app')
const html = require('./html')

app(html(args.url), {
    onTop: args.on_top,
    onAllSpaces: args.on_all_spaces
})
