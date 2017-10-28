$("#reg-button").click(()=> {
    $("#dark").css({ "display": "block" });
    $("#Register").slideDown(400).css({ "display": "block" });
});

$("#button-x1").click(()=> {
    $("#Register").slideUp(200);
    $("#dark").css({ "display": "none" });
});

$("#log-button").click(()=> {
    $("#dark").css({ "display": "block" });
    $("#Login").slideDown(400).css({ "display": "block" });

});

$("#button-x2").click(()=> {
    $("#Login").slideUp(200);
    $("#dark").css({ "display": "none" });
});
