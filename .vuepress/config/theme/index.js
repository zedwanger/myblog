const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
const nav = require('../nav')

module.exports = Object.assign({}, themeReco, {
  sidebar,
  nav
})