#= require vendor/jquery.min
#= require vendor/bootstrap-scrollspy
#= require vendor/leaflet

$ ->
  headerHeight = 80

  map = L.map('map',
    scrollWheelZoom: false,
    center: [52.501267, 13.411800],
    zoom: 16
  )
  L.tileLayer('http://{s}.tile.cloudmade.com/a85ec48840a1492796458b323c229b45/87707/256/{z}/{x}/{y}.png',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  ).addTo(map)
  mapIcon = L.icon(
    iconUrl: '/images/map-marker.png',
    iconRetinaurl: '/images/map-marker-icon-2x.png',
    iconSize: [32, 37],
    iconAnchor: [16, 36]
  )
  marker = L.marker([52.50259, 13.411984],
    icon: mapIcon
  ).addTo(map)

  $('#funny-cat-video').click ->
    $('.funny-cat-video').show()

    $('.funny-cat-video .overlay').click ->
      $(this).parent().hide()

    return false

  $('body').scrollspy(
    offset: headerHeight
  )

  $('a.scroll').click ->
    sectionName = $('body').find($(this).attr("href"))

    $('html, body').animate(
      scrollTop: sectionName.offset().top - headerHeight
    , 750)

    return false
