$(document).ready(function () {
  let rate = 2500
  let growth = 10
  let intervalId

  function resetAndStart() {
    if (intervalId) {
      clearInterval(intervalId)
    }
    intervalId = setInterval(() => {
      const w = $('.circle').width()
      $('.circle').width(w + growth)
      $('.circle').height(w + growth)
    }, rate)
  }
  resetAndStart()

  $('body').on('click', '.circle', function (evt) {
    evt.preventDefault()
    $(this).remove()
  })

  $('#startBtn').click(function (evt) {
    evt.preventDefault()
    const properties = $('form').toObject()
    const width = parseInt(properties.width)
    $('.circle').width(width)
    $('.circle').height(width)
    growth = parseInt(properties.growth) || growth
    rate = parseInt(properties.rate) || rate
	resetAndStart()
  })

  $('#setBtn').click(function (evt) {
    evt.preventDefault()
    let numberOfCircles = $('#circles').val() * 1
    while (numberOfCircles--) {
      let clonedElement = $('.circle').clone()
	  console.log(clonedElement)
      clonedElement.css({
        top: Math.min(
          Math.random() * 50 * numberOfCircles,
          $('body').height() - clonedElement.height(),
        ),
        left: Math.min(
          Math.random() * 50 * numberOfCircles,
          $('body').width() - clonedElement.width(),
        ),
      })
      clonedElement.appendTo('body')
    }
  })
})
;(function ($) {
  $.fn.extend({
    toObject: function () {
      var result = {}
      this.serializeArray().forEach(function (v, i) {
        result[v.name] = v.value
      })
      return result
    },
  })
})(jQuery)
