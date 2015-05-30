Swiper = new Swipe(['camera', 'settings', 'history'])
console.log Swiper

Template.center.helpers
  Swiper: -> Swiper

Template.center.rendered = ->

  # initial page
  Swiper.setInitialPage('camera')

  # page control
  Tracker.autorun ->
    if Swiper.pageIs('history')
      Swiper.leftRight(null, 'camera')

  Tracker.autorun ->
    if Swiper.pageIs('camera')
      Swiper.leftRight('history', 'settings')

  Tracker.autorun ->
    if Swiper.pageIs('settings')
      Swiper.leftRight('camera', null)
