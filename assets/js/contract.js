var sum = 0;
var id = 0;

$(document).on("click", ".weapon-activities__button--for-remove", function () {
    var card = $(this).parent().parent().parent();

    $(this)
        .removeClass("weapon-activities__button--for-remove")
        .html("Выбрать");

    id = id - 1;
    sum = sum - parseInt(card.find(".paid-way__cost").html().replace("Р", ""), 10);
    var acount = id + " предметов " + sum + " Р";
    $(".contract__creation--acount").html(acount);

    $(".user-weapons").append(card.wrap('<div class="user-weapons__weapon"></div>').parent().html());
    
    card.parent()
        .parent()
        .append('<div class="contract__card--cover">' + $(this).data("id") + '</div>');
    card.parent().remove();
});

$(document).on("click", ".weapon-activities__button:not(.weapon-activities__button--for-remove)", function () {
    if ($(".contract__card").find(".contract__card--cover").length > 0) {
        var card = $(this).parent().parent().parent();
        

        $(".contract__card").each(function (i, e) {
            if ($(e).find(".contract__card--cover").length > 0) {
                $(this).append(card.wrap('<div class="user-weapons__weapon"></div>').parent().html());
                $(this).find(".contract__card--cover").remove();
                $(this).find(".weapon-activities__button")
                    .addClass("weapon-activities__button--for-remove")
                    .attr({ "data-id":i + 1 })
                    .html("Убрать");
                
                id = i + 1;
                sum = sum + parseInt($(this).find(".paid-way__cost").html().replace("Р", ""), 10);
                var acount = id + " предметов " + sum + " Р";
                $(".contract__creation--acount").html(acount);

                return false;
            }
        });

        card.parent().remove();
    } else {
        alert("Stop");
    }
});