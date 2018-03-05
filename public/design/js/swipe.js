'use strict';

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');
var dailylikes = 0;
var match = 1;
var matched = 1;

//Displaying cards and refreshing display after likes or dislikes
function initCards(card, index) {
    var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

    newCards.forEach(function (card, index) {
        card.style.zIndex = allCards.length - index;
        card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
        card.style.opacity = (10 - index) / 10;
        if (card.style.zIndex == 11)
            moving(card);
    });
    setTimeout(function(){
        app.slideClick('nope');
    }, 120);
    tinderContainer.classList.add('loaded');
    if (dailylikes >= 20)
        love.className += " tinder-not-allowed";
    if (matched == 1){
        $("#modal-manager").toggle();}
}
setTimeout(function(){
    initCards();
    $('#tinder').toggleClass("tinder-appear");
    match = 0;
}, 3350);

//Animation
function moving(el) {
    var hammertime = new Hammer(el);

    hammertime.on('pan', function (event) {
        el.classList.add('moving');
    });

    hammertime.on('pan', function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
        tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
    });

    //Drag and drop
    hammertime.on('panend', function (event) {
        el.classList.remove('moving');
        tinderContainer.classList.remove('tinder_love');
        tinderContainer.classList.remove('tinder_nope');

        var moveOutWidth = document.body.clientWidth;
        var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        if (dailylikes < 20 || event.deltaX < 0){
            event.target.classList.toggle('removed', !keep);
            setTimeout(function(){
                event.target.classList.toggle('tinder--card--removed', !keep);
            }, 475);}
        else {
            alert('Vous avez épuisé votre nombre de likes pour aujourd\'hui.');
        }
        if (keep) {
            event.target.style.transform = '';
        } else {
            var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
            var toX = event.deltaX > 0 ? endX : -endX;
            var endY = Math.abs(event.velocityY) * moveOutWidth;
            var toY = event.deltaY > 0 ? endY : -endY;
            var xMulti = event.deltaX * 0.03;
            var yMulti = event.deltaY / 80;
            var rotate = xMulti * yMulti;

            event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
            if (event.deltaX > 0)
                dailylikes += 1;
            initCards();
        }
    });
};

//Working buttons
function createButtonListener(love) {
    return function (event) {
        var cards = document.querySelectorAll('.tinder--card:not(.removed)');
        var moveOutWidth = document.body.clientWidth * 1.5;

        if (!cards.length) return false;

        var card = cards[0];

        if (love) {
            dailylikes += 1;
            if (dailylikes > 20)
            {
                alert('Vous avez épuisé votre nombre de likes pour aujourd\'hui.');
                return;
            }
            tinderContainer.classList.toggle('tinder_love');
            setTimeout(function(){
                tinderContainer.classList.toggle('tinder_love');
            }, 475);
            card.classList.add('removed');
            setTimeout(function(){
                card.classList.toggle('tinder--card--removed');
            }, 475);

            card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
            initCards();
        } else {
            tinderContainer.classList.toggle('tinder_nope');
            setTimeout(function(){
                tinderContainer.classList.toggle('tinder_nope');
            }, 475);
            card.classList.add('removed');
            setTimeout(function(){
                card.classList.toggle('tinder--card--removed');
            }, 475);
            card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
            initCards();
        }

        event.preventDefault();
    };
}

//Working arrow keys function
function createKeyListener(love) {
        var cards = document.querySelectorAll('.tinder--card:not(.removed)');
        var moveOutWidth = document.body.clientWidth * 1.5;

        if (!cards.length) return false;

        var card = cards[0];

        card.classList.add('removed');

        if (love) {
            tinderContainer.classList.toggle('tinder_love');
            setTimeout(function(){
                tinderContainer.classList.toggle('tinder_love');
            }, 475);
            setTimeout(function(){
                card.classList.toggle('tinder--card--removed');
            }, 475);
            card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
        } else {
            tinderContainer.classList.toggle('tinder_nope');
            setTimeout(function(){
                tinderContainer.classList.toggle('tinder_nope');
            }, 475);
            setTimeout(function(){
                card.classList.toggle('tinder--card--removed');
            }, 475);
            card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
        }

        initCards();

}


var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);

//catching keys press
$('body').bind('keyup', function (ev) {
    if (ev.keyCode === 39 && !$('#love').hasClass('tinder--buttons--deactivated') && match === 0) {
        if (dailylikes < 20)
        {
            dailylikes += 1;
            createKeyListener(true);
        }
        else
            alert('Vous avez épuisé votre nombre de likes pour aujourd\'hui.');
    }
    if (ev.keyCode === 37 && !$('#nope').hasClass('tinder--buttons--deactivated') && match === 0)
        createKeyListener(false);
    if (ev.keyCode === 38 && match === 0)
    {
        $("#pannel").slideToggle(400);
        $("#select").toggleClass("selection-toggle");
        setTimeout(function(){
            $("#nope").toggleClass("tinder--buttons--deactivated");
            $("#nope").toggle('active');
            $("#love").toggleClass("tinder--buttons--deactivated");
            $("#love").toggle('active');
            $('#tinder').toggle('active');
        }, 120);}
});

//Cancelling default scroll with key and space
window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

$('#card-pic').on('click', function() {
   alert('ntm');
});
