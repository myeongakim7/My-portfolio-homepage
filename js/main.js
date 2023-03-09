// main.js

// pc화면
if (screen.width > 768) {
  $(function () {
    $(".main-banner2 h2").find("strong").css("font-size", "64px");
  });

  $(function () {
    $(".main-banner2 h2").find("span").css("color", "var(--point)");
  });
}

// mobile 화면
if (screen.width < 769) {
  $(function () {
    $(".main-banner2 h2").find("strong").css("font-size", "24px");
  });
  $(function () {
    $(".main-banner2 h2").find("span").css("color", "var(--point)");
  });
}
