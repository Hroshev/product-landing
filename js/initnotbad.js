$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    var t = $(this).attr("href"),
      e = $(t).offset().top;
    return (
      jQuery("html:not(:animated), body:not(:animated)").animate(
        { scrollTop: e },
        600
      ),
      !1
    );
  })
});
