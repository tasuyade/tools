const PN = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]; 
function ransu() {
    ran1 = Math.floor(Math.random() * PN.length);
    ran2 = Math.floor(Math.random() * PN.length);
    ks = PN[ran1] * PN[ran2];
    while (ks > 100 || ks < 10) {
        ran1 = Math.floor(Math.random() * PN.length);
        ran2 = Math.floor(Math.random() * PN.length);
        ks = PN[ran1] * PN[ran2];
    }
    return ks;
}

function an(){
 if (va3 == "" || va4 == "") {
        alert("数値を入力してください");
    } else {
      if(va3 == PN[ran1] && va4 == PN[ran2]){
        $("audio").get(0).pause();
        $("#remove").hide();
        $('#remove').before('<h1 id="GM">Good morning!</h1>');
      }else if(va3 == PN[ran2] && va4 == PN[ran1]){
        $("audio").get(0).pause();
        $("#remove").hide();
         $('#remove').before('<h1 id="GM">Good morning!</h1>');
      }else{
        alert("違います");
      }
    }
}

function doclick() {

    if (va1 == "" || va2 == "") {
        alert("数値を入力してください");
    } else {
        let com = confirm(va1+"時"+va2+"分でよろしいですか？");
        if (com) {
            alert("セットしました！")
            $("#ta").hide();
            hm = String(va1) + "時" + String(va2) + "分";
            
            qa= ransu();
            $('#An').before('<h1 id="so">' + qa + '</h1>');
            $('#kn').before("<h2>アラームは" + hm + "にセットされています。</h2>");
            $("#so").hide();
            tap = 0;
            setInterval(function () {
                nhm = String(h)+"時"+String(m)+"分";
                if (hm == nhm && tap == 0) {
                    tap += 1;
                    $("audio").get(0).play();
                    $("audio").get(0).loop = true;
                    $("#so").show();
                    $("#An").show();
                }
            }, 500);
        }
    }
}
$(function () {
    $("body").fadeIn(1500);
    setInterval(function () {
        date = new Date();
        h = date.getHours();
        m = date.getMinutes();
        va1 = $("#t1").val();
        va2 = $("#t2").val();
        va3 = $("#q1").val();
        va4 = $("#q2").val();
        $("#date").html("現在時刻は" + h + "時" + m + "分です。");
    }, 500);
})
