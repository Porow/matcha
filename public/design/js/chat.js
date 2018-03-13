var $messages = $('.chat-box'),
    d, h, m,
    i = 0;

var m = ('0'+ new Date().getMinutes()).slice(-2);
var oldm = ('0'+ new Date().getMinutes()).slice(-2);
var boo = 1;


//Get and display timestamp
function setDate(){
    d = new Date();
    da = ('0' + d.getDate()).slice(-2);
    mon = ('0' + (d.getMonth()+1)).slice(-2);
    yr = d.getFullYear();

    m = ('0'+d.getMinutes()).slice(-2);
    if (boo === 1) {
        oldm = m;
        boo = 0;
        $('<div class="timestamp">' + da + '/' + mon + '/' + yr + '<br>' + d.getHours() + ':' + m + '</div>').appendTo($('.chat-box'));
    }
}

$('#messenger').submit(function () {
    return false;
});
$("#message").attr("autocomplete", "off");

$(window).on("blur focus", function(e) {
    var prevType = $(this).data("prevType");

    if (prevType != e.type) {   //  reduce double fire issues
        switch (e.type) {
            case "blur":
                clearTitle();
                break;
            case "focus":
                clearTitle();
                break;
        }
    }

    $(this).data("prevType", e.type);
});

//Chatting display
$('#btn').click(function() {
    var text = $('#message').val();
    if (!text.replace(/\s/g, '').length){
        $('#message').val('');
        return;}
    setDate();
    $('.chat-box').append('<div id="msg" class="msg-sent animated bounceInRight">' + text + '</div>');
    $('#message').val('');
    var elem = document.getElementById('chat');
    elem.scrollTop = elem.scrollHeight;
    setTimeout(function () {
        var myArray = ['Coucou, tu vas bien ?', 'C\'est super ça ! Moi j\'adore Camagru', '🍕', '💅🏼', '🍑', '🙏', '🙈', '🙉', '🙊', '🍌'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        if (document.hidden) {
            $.playSound("../design/sounds/new_msg.mp3");
            changeTitle();
        }
        $('.chat-box').append('<div class="msg-received animated bounceInLeft"><img class="user-sent-pic" src="{{ baseUrl }} ../../users/002.jpg"><span>' + rand + '</span></div>');
        elem.scrollTop = elem.scrollHeight;
        setDate();
        }, 1500);
});

//Bot auto message
/*setTimeout(function () {
    var myArray = ['Coucou, tu vas bien ?', 'C\'est super ça ! Moi j\'adore Camagru', '🍕', '💅🏼', '🍑', '🙏', '🙈', '🙉', '🙊', '🍌'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    setDate();
    if (document.hidden) {
        $.playSound("../design/sounds/new_msg.mp3");
        changeTitle();
    }
    $('.chat-box').append('<div class="msg-received animated bounceInLeft"><img class="user-sent-pic" src="{{ baseUrl }} ../../users/002.jpg"><span>' + rand + '</span></div>');
    elem.scrollTop = elem.scrollHeight;
}, 1500);*/

//Clear badges notifications
var title = $(document).prop('title');
var notif = 1;
var titlefix = title;

function clearTitle(){
    changeTitle;
    $(document).prop('title', titlefix);
    notif = 1;
}

//Adds notifications badges if tab isnt active
function changeTitle() {
    var title = $(document).prop('title');

    if (title.indexOf(notif) === -1 && document.hidden) {
        changeTitle;
        $(document).prop('title', '('+ notif + ') '+titlefix);
    }
    else {
        notif += 1;
        if (document.hidden) {
            changeTitle;
            $(document).prop('title', '(' + notif + ') ' + titlefix);
        }
    }
}

//Sound playing
(function ($) {
    $.extend({
        playSound: function () {
            return $(
                '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                + '<source src="' + arguments[0] + '" />'
                + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                + '</audio>'
            ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);
