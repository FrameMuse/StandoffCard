
// Replace instead of $(".choice-buttons__button").click(function() {
var choice_buttons__selected = "choice-buttons__button--selected";
$(".choice-buttons__button").addClass(choice_buttons__selected);
$(".choice-buttons__button").click(function () {

    //$("."+selected).removeClass(selected);
    $(this).toggleClass(choice_buttons__selected);
});