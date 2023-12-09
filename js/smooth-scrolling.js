$(document).ready(function () {
    $('a[href^="#telegram-form"]').click(function () {
      var t = $(this).attr("href"),
        e = $(t).offset().top;
      return (
        jQuery("html:not(:animated), body:not(:animated)").animate(
          { scrollTop: e },
          1000
        ),
        !1
      );
    })
  });