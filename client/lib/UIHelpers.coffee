UI.registerHelper('prettifyDate', (date) ->
  if !date?
    ''
  else
    timestamp = new Date(date)
    now = new Date().getTime()
    diffInMinutes = Math.round((now - timestamp.getTime()) / 60000)
    diffInHours = Math.round((now - timestamp.getTime()) / 3600000)
    diffInDays = Math.round((now - timestamp.getTime()) / 86400000)
    if diffInMinutes < 1
      "Less than a minute ago"
    else if diffInMinutes < 60
      "" + diffInMinutes + " minutes ago"
    else if diffInHours < 16
      "" + diffInHours + " hours ago"
    else if diffInDays < 1
      "Today"
    else if diffInDays < 2
      "Yesterday"
    else if diffInDays < 8
      "" + diffInDays + " days ago"
    else
      "The " + timestamp.toLocaleDateString('en')
)

UI.registerHelper('prettifyLocation', (coords) ->
  if !coords?
    ''
  else
    "(" + coords.latitude.toFixed(6) + ", " + coords.longitude.toFixed(6) + ")"
)
