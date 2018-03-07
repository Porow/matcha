var $messages = $('.chat-box'),
    d, h, m,
    i = 0;

$(window).load(function() {
    $messages.mCustomScrollbar();
    setTimeout(function() {
        fakeMessage();
    }, 100);
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate(){
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
}

function insertMessage() {
    msg = $('.send-msg-box').val();
    if ($.trim(msg) == '') {
        return false;
    }
    $('<div class="msg-sent">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message-input').val(null);
    updateScrollbar();
    setTimeout(function() {
        fakeMessage();
    }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
    insertMessage();
});

$(window).on('keydown', function(e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
})

var Fake = [
    'Hi there, I\'m Fabio and you?',
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'Codepen is a nice place to stay',
    'I think you\'re a nice person',
    'Why do you think that?',
    'Can you explain?',
    'Anyway I\'ve gotta go now',
    'It was a pleasure chat with you',
    'Time to make a new codepen',
    'Bye',
    ':)'
]

function fakeMessage() {
    if ($('.message-input').val() != '') {
        return false;
    }
    $('<div class="message loading new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function() {
        $('.message.loading').remove();
        $('<div class="message new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        i++;
    }, 1000 + (Math.random() * 20) * 100);

}






/*$('#messenger').submit(function () {
    return false;
});
$("#message").attr("autocomplete", "off");

$('#btn').click(function() {
    var text = $('#message').val();
    if (!text.replace(/\s/g, '').length){
        $('#message').val('');
        return;}
    $('.chat-box').append('<div id="msg" class="msg-sent animated bounceInRight">' + text + '</div>');
    $('#message').val('');
    var elem = document.getElementById('chat');
    elem.scrollTop = elem.scrollHeight;
    setTimeout(function () {
        var myArray = ['Coucou, tu vas bien ?', 'C\'est super ça ! Moi j\'adore Camagru', '🍕', '💅🏼', '🍑', '🙏', '🙈', '🙉', '🙊', '🍌'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        $('.chat-box').append('<div class="msg-received animated bounceInLeft"><img class="user-sent-pic" src="{{ baseUrl }} ../../users/002.jpg"><span>' + rand + '</span></div>');
        elem.scrollTop = elem.scrollHeight;
        }, 1500);
});*/