#= require jquery.min
#= require bootstrap-scrollspy

$ ->
  headerHeight = 80

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
