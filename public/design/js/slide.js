$(function () {

    $("#range_age").ionRangeSlider({
        hide_min_max: false,
        keyboard: true,
        min: 18,
        max: 55,
        from: 18,
        to: 25,
        type: 'double',
        step: 1,
        prefix: "",
        grid: false
    });

});

$(function () {

    $("#range_distance").ionRangeSlider({
        hide_min_max: false,
        keyboard: true,
        min: 5,
        max: 200,
        from: 5,
        type: 'single',
        step: 5,
        prefix: "",
        grid: false
    });

});