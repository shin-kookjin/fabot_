$(function () {
  //위로 버튼(링크)를 클릭하면 맨위로 스크롤되는 애니메이션
  $(".btn_fixed_bottom").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  //위로 버튼(링크)를 안보이게 하고
  //스크롤을 했을 때, 스크롤 1000 이상이면 보이고
  //아니면 안보이게
  $(".btn_fixed_bottom").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      $(".btn_fixed_bottom").fadeIn();
    } else {
      $(".btn_fixed_bottom").fadeOut();
    }

    //윈도우가 스크롤 할 때 헤더 배경클랙스 추가 되도록
    if ($(window).scrollTop() > 100) {
      $("#hd").addClass("bg");
    } else {
      $("#hd").removeClass("bg");
    }
  });

  //헤더 네브의 링크를 클릭하면 해당 영역으로
  //스크롤 애니메이션 되도록
  $("#hd nav a").click(function () {
    var link = $(this).attr("href");
    var posTop = $(link).offset().top;
    $("html,body").animate({ scrollTop: posTop }, 500);
  });
});
