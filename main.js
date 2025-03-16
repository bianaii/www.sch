function clicks() {
    $('#div1').hide();
    $('#div2').show();
    $('#div2').addClass("fadeinv2");

    var typed = new Typed('.katakata', {
        strings: [
            "Aku cuma mau bilang", 
            "Good Morning Sayangku", 
            "Aku Sayang Banget Sama Kamu", 
            "I Love You Alycia Queen"
        ],
        typeSpeed: 70,
        showCursor: false,
        onComplete: function() {
            setTimeout(() => {
                $('.katakata').append('<br><br><button class="tombolLanjut" onclick="lanjut()">💖 Lanjut 💖</button>');
            }, 1000);
        }
    });
}

function lanjut() {
    window.location.href = " https://bianaii.github.io/www.id/"; 
}
