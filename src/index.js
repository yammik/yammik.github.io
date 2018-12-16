document.addEventListener('DOMContentLoaded', () => {
  $('.content div').each(function(i) {
    $(this).hide(0);
    $('#landing').fadeIn(1000);
  })
  $("#logo").fadeOut(0, function() {
    setTimeout(function () {
      $("#logo").fadeIn(1000);
    }, 0);
  });

  $(".menu").each(function (i) {
    $(this).fadeOut(0, () => setTimeout(() => $(this).fadeIn(Math.random()*1500), 0))
  })

  $(".menuItem").on('click', function(e) {
    const component = e.target.id.replace('Link','');
    $('.content div').each(function(i) {
      $(this).hide(0);
    })
    $(`#${component}`).fadeIn(1000);
  })
})
