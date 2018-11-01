document.addEventListener('DOMContentLoaded', () => {
  $("#logo").fadeOut(0, function() {
    setTimeout(function () {
      $("#logo").fadeIn(1000);
    }, 0);
  });
  
  $(".menu").each(function (i) {
    $(this).fadeOut(0, () => setTimeout(() => $(this).fadeIn(Math.random()*1500), 0))
  })
})
