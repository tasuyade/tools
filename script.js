// JavaScript source code
$(function () {
    setInterval(function () {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        $("#date").html("現在時刻は" + h + "時" + m + "分です。");
    }, 999);
    $("body").fadeIn(1500);

   });