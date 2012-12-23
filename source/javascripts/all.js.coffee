//= require jquery.min
//= require waypoints.min

$ ->
  $('#funny-cat-video').click ->
    $('.funny-cat-video').show()

    $('.funny-cat-video .overlay').click ->
      $(this).parent().hide()

    return false

  $('.about-section').waypoint ->
    $('[role=navigation] li').removeClass('active')
    $('[role=navigation] .about').addClass('active')

  $('.work-section').waypoint ->
    $('[role=navigation] li').removeClass('active')
    $('[role=navigation] .work').addClass('active')
