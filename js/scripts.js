$(".navbar-toggle").click(function () {
    display = $("#expanded-menu").css("display");
    if (display == "block") {
        $("#expanded-menu").hide(300);
        $(".navbar-toggle").css("background", "#ecf0f1");
    } else {
        $("#expanded-menu").show(300);
        $(".navbar-toggle").css("background", "#dddddd");
    }
});

$(".btn-hide").click(function(){
    $('#filter > div').css('display', 'none');
    $('#filter .show').show();
    $('#filter').css('height', '80px');
});
