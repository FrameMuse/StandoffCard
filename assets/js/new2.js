$(document).on('click', ".user-inventory__header--var", function () {
    var ThisName = $(this).html();
    var ThisData = $(this).attr("data-var");

    var other = $(".user-inventory__title");
    var OtherName = other.html();
    var OtherData = other.attr("data-var");


    other
        .html(ThisName)
        .attr({ "data-var": ThisData });

    $(this)
        .html(OtherName)
        .attr({ "data-var": OtherData });
    
    if (ThisData != "items") {
        $(".user-inventory")
            .attr({ class: "user-inventory" })
            .addClass("user-inventory--" + ThisData);
    } else {
        $(".user-inventory")
            .attr({ class: "user-inventory" })
    }
});