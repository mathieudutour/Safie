Swiper = new Swipe(['stepOne', 'stepTwo', 'stepThree', 'stepFour'])

Template.tutorial.helpers
  Swiper: -> Swiper
    
Template.tutorial.rendered = ->

  # initial page
  Swiper.setInitialPage('stepOne')

  # page control
  Tracker.autorun ->
    if Swiper.pageIs('stepOne')
      Swiper.leftRight(null, 'stepTwo')

  Tracker.autorun ->
    if Swiper.pageIs('stepTwo')
      Swiper.leftRight('stepOne', 'stepThree')

  Tracker.autorun ->
    if Swiper.pageIs('stepThree')
      Swiper.leftRight('stepTwo', 'stepFour')
        
    Tracker.autorun ->
    if Swiper.pageIs('stepFour')
      Swiper.leftRight('stepThree', null)