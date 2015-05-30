@Router = {}
@Router.Page =
  LANDING:
    index: 0
    url: '/'
    default: true
  LOGIN:
    index: 1
    url: '/login'
  SIGNUP:
    index: 2
    url: '/signup'

Meteor.startup () ->
  paths = window.location.pathname
  page = _.where Router.Page, {url: paths}
  if page? and page.length > 0
    if page.length is 1
      Router._moveToPage page[0].index
    else # paths is '/'
      Router._moveToPage Router.Page.LANDING.index
  else
    Router._moveToPage Router.Page.LANDING.index

window.addEventListener('popstate', (e) ->
  page = e.state
  if !page?
    Router._moveToPage Router.Page.LANDING
  else
    Router._moveToPage page.pageIndex
)

@Router._moveToPage = (index) ->
  #GAnalytics.pageview()
  Session.set('previous_page', Session.get('page'))
  Session.set('page', index)
  if index < Session.get('previous_page')
    if Session.get('direction') is 'to-right'
      Session.set('direction', 'to-right-bis')
    else
      Session.set('direction', 'to-right')
  else if index > Session.get('previous_page')
    if Session.get('direction') is 'to-left'
      Session.set('direction', 'to-left-bis')
    else
      Session.set('direction', 'to-left')
  else
    Session.set('direction', null)

@Router.goToPage = (page) ->
  url = page.url
  history.pushState({pageIndex: page.index}, null, url)
  Router._moveToPage page.index

@Router.goToPreviousPage = () ->
  page = _.findWhere Page, {index: Session.get('previous_page')}
  Router.goToPage page, null

@Router.isCurrentPage = (page) ->
  Session.get('page') is page.index
