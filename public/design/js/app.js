var currentPath = window.location.pathname+window.location.search;

var cookies = {
    'getCookies': function()
    {
        return (Cookies.get('cookies'));
    },

    'setCookies': function(event, element)
    {
        event.addEventListener('click', function(){
            Cookies.set('cookies', 'cookiesAccepted');
            $('#cookies').animateCss('fadeOut', function () {
                document.getElementById('cookies').style.display = "none";
            });
        });
    }
};

var user = {
    userID: "",
    name: "",
    accessToken: "",
    picture: "",
    email: "",
    age: 0,
    gender: "",
    bio: "",
    relationShip: ""
};

var translateBook = {
    "Afin de vous proposer un site Internet optimal et de l'améliorer continuellement, nous utilisons des cookies. En poursuivant votre utilisation du site Internet, vous acceptez l'utilisation de cookies.": {
      en: "In order to offer you an optimal website and to continually improve it, we use cookies. By continuing your use of the website, you agree to the use of cookies.",
      fr: "Afin de vous proposer un site Internet optimal et de l'améliorer continuellement, nous utilisons des cookies. En poursuivant votre utilisation du site Internet, vous acceptez l'utilisation de cookies."
    },
    "vues": {
        en: "visits",
        fr: 'vues'
    },
    "Nom, prénom": {
      en: "Name",
      fr: "Nom, prénom"
    },
    "Sexe": {
        en: "Gender",
        fr: "Sexe"
    },
    "Je préfère": {
        en: "I'm looking for",
        fr: "Je préfère"
    },
    "Les garçons": {
        en: "boys",
        fr: "Les garçons"
    },
    "Les filles": {
        en: "girls",
        fr: "Les filles"
    },
    "Se souvenir de moi": {
        en: "Remember me",
        fr: "Se souvenir de moi"
    },
    "Retirer la suspenssion": {
      en: "Remove the punishment",
      fr: "Retirer la suspenssion"
    },
    "de": {
        en: "from",
        fr: "de"
    },
    "inscrit(e) depuis le": {
        en: "register since",
        fr: "inscrit(e) depuis le"
    },
    "Suspendre l'utilisateur": {
        en: "Suspend the user",
        fr: "Suspendre l'utilisateur"
    },
    "Attendre": {
        en: "Wait",
        fr: "Attendre"
    },
    "J'approuve être majeur et avoir lu les": {
        en: "I agree to be of age and have read the",
        fr: "J'approuve être majeur et avoir lu les"
    },
    "Votre date de naissance": {
        en: "Your birthday",
        fr: "Votre date de naissance"
    },
    "Votre adresse e-mail": {
        en: "Your e-mail address",
        fr: "Votre adresse e-mail"
    },
    "Pas de signalement pour le moment": {
        en: "There is no one reports for the moment",
        fr: "Pas de signalement pour le moment"
    },
    "En cours":{
        en: "Remaining",
        fr: "En cours"
    },
    "Catégorie":{
        en: "Category",
        fr: "Catégorie"
    },
    "Cible":{
        en: "Target",
        fr: "Cible"
    },
    "Harcèlement": {
        en: "Persecution",
        fr: "Harcèlement"
    },
    "Matchez": {
        en: "Match",
        fr: "Matchez"
    },
    "Swipez": {
        en: "Swipe",
        fr: "Swipez"
    },
    "Discutez": {
        en: "Chat",
        fr: "Discutez"
    },
    "Connexion": {
        en: "Log in",
        fr: "Connexion"
    },
    "Déconnexion": {
        en: "Logout",
        fr: "Déconnexion"
    },
    "Gestion des utilisateurs": {
        en: "Users management",
        fr: "Gestion des utilisateurs"
    },
    "Statistiques": {
        en: "Statistics",
        fr: "Statistiques"
    },
    "Signalements": {
      en: "Reports",
      fr: "Signalements"
    },
    "S'inscrire": {
        en: "Sign up",
        fr: "S'inscrire"
    },
    "Partez à la conquête de votre âme soeur": {
        en: "Go to conquest your soul mate",
        fr: "Partez à la conquête de votre âme soeur"
    },
    "Proposé par": {
        en: "Powered by",
        fr: "Proposé par"
    },
    "Si une personne vous plait, swipez vers la droite": {
        en: "Swipe right to like someone",
        fr: "Si une personne vous plait, swipez vers la droite"
    },
    "Sinon swipez vers la gauche.": {
        en: "or swipe left.",
        fr: "Sinon swipez vers la gauche."
    },
    "Connexion avec Facebook": {
        en: "Log in with facebook",
        fr: "Connexion avec Facebook"
    },
    "Connexion avec mon compte": {
        en: "Log in with my account",
        fr: "Connexion avec mon compte"
    },
    "Votre identifiant": {
        en: "Your username",
        fr: "Votre identifiant"
    },
    "Votre mot de passe": {
        en: "Your password",
        fr: "Votre mot de passe"
    },
    "J'ai oublié mon mot de passe": {
        en: "I've forgot my password",
        fr: "J'ai oublié mon mot de passe"
    }
};

var app = {
    'isEmpty': function(element)
    {
        return (element.value.length <= 0);
    },

    'minLength': function(element, n)
    {
        return (element.value.length >= n)
    },

    'maxLength': function(element, n)
    {
        return (element.value.length <= n);
    },

    'removeCss': function(element, type)
    {
        element.removeAttribute(type);
    },

    'hasClass': function(element, name)
    {
        return (element.classList.contains(name));
    },

    'addClass': function(element, name)
    {
        if (!app.hasClass(element, name))
            element.className += " " + name;
    },

    'removeClass': function(element, name)
    {
        if (app.hasClass(element, name))
            element.classList.remove(name);
    },

    'cookies': function()
    {
        var m_cookies = document.getElementById('cookies');

        if (!cookies.getCookies())
        {
            m_cookies.style.display = 'flex';
            cookies.setCookies(document.getElementById('btn-cookies'), m_cookies);
        }
    },

    'checkSecurity': function(element)
    {
        var password = element.value;
        var score = 0;

        if (password.length > 5)
            score++;
        if (/[A-Z]/.test(password))
            score++;
        if (/\d/.test(password))
            score++;
        return score;
    },

    'checkScrolling': function()
    {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
            document.getElementById('goToTop').style.opacity = "1";
        else
            document.getElementById('goToTop').style.opacity = "0";
    },

    'goTop': function()
    {
        $(window.opera ? 'html' : 'html, body').animate({
            scrollTop: 0
        }, 'slow');
    },

    'slideClick': function(target)
    {
        var position = document.getElementById(target).offsetTop;
        $(window.opera ? 'html' : 'html, body').animate({
            scrollTop: position
        }, 'slow');
    },

    'translateModule': function(defaultCountry)
    {
        var translator = $('body').translate({lang: 'fr', t: translateBook});
        translator.lang(defaultCountry);
    },

    'switchCountry': function(parent)
    {
        let img = parent.childNodes[1];
        let link = "/design/images/flags/";

        if (!sessionStorage.getItem('country'))
        {
            img.src = link + "France.png";
            app.translateModule('en');
            sessionStorage.setItem('country', 'en');
        }
        else
        {
            if (sessionStorage.getItem('country') === "fr")
            {
                img.src = link + "France.png";
                app.translateModule('en');
                sessionStorage.setItem('country', 'en');
            }
            else if (sessionStorage.getItem('country') === "en")
            {
                img.src = link + "usa.png";
                app.translateModule('fr');
                sessionStorage.setItem('country', 'fr');
            }
        }
    },

    'sortTable': function (n, table, parsing, p)
    {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

        switching = true;
        dir = "asc";

        while (switching)
        {
            switching = false;
            rows = document.querySelectorAll('#'+table+' tr');

            for (i = 1; i < (rows.length - 1); i++)
            {
                if (!p)
                {
                    x = rows[i].querySelectorAll('td')[n].innerText;
                    y = rows[i + 1].querySelectorAll('td')[n].innerText;
                }
                else {
                    x = rows[i].querySelectorAll('td span#' + p)[0].innerHTML;
                    y = rows[i + 1].querySelectorAll('td span#' + p)[0].innerHTML;
                    x = x.charCodeAt(0);
                    y = y.charCodeAt(0);
                }


                if (dir == "asc")
                {
                    if (parsing === "int")
                    {
                        if (parseInt(x) > parseInt(y))
                        {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    else if (parsing === "length")
                    {
                        if (x.length > y.length)
                        {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    else if (parsing === "date")
                    {
                        var x_date = new Date(x);
                        var y_date = new Date(y);
                        if (x_date > y_date)
                        {
                            shouldSwitch = true;
                            break;
                        }
                    }
                } else if (dir == "desc") {
                    if (parsing === "int")
                    {
                        if (parseInt(x) < parseInt(y))
                        {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    else if (parsing === "length")
                    {
                        if (x.length < y.length)
                        {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    else if (parsing === "date")
                    {
                        var x_date = new Date(x);
                        var y_date = new Date(y);
                        if (x_date < y_date)
                        {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
            }
            if (shouldSwitch)
            {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++;
            } else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    },

    'LoginFB': function ()
    {
        FB.login(function(response){
            if (response.status === "connected")
            {
                user.userID = response.authResponse.userID;
                user.accessToken = response.authResponse.accessToken;
                FB.api('/me?fields=id,name,first_name,last_name,email,picture.type(large),birthday,about,gender,relationship_status', function(userData){
                    var age = new Date(userData.birthday);
                    var ageDifMs = Date.now() - age.getTime();
                    var ageDate = new Date(ageDifMs);

                    user.name = userData.name;
                    user.email = userData.email;
                    user.picture = userData.picture.data.url;
                    user.age = Math.abs(ageDate.getUTCFullYear() - 1970);
                    user.bio = userData.about;
                    user.relationship = userData.relationship_status;
                    user.gender = userData.gender;

                    $.ajax({
                        url: "/",
                        method: "GET",
                        data: user,
                        dataType: 'text',
                        success: function (response){
                            if (response)
                                window.location = "/users/me";
                        }
                    });
                });
            }
        }, {scope: 'public_profile, email'});
    },

    "notifications": function (message, borderColor, backgroundColor, options) {
        $('#notifications').fadeIn('slow');
        $('#notifications').css('border', '1px solid '+borderColor);
        if (options)
            $('#notifications').css(options);
        $('#notifications').css('background-color', backgroundColor);
        $('#notifications').html(message);
        setTimeout(function () {
            $('#notifications').fadeOut('slow');
        }, 3000);
    },

    "instagramAPI": function(id, type)
    {
        $.ajax({
            url: "https://api.instagram.com/oauth/authorize/?client_id="+id+"&http://localhost=&response_type="+type,
            method: "GET",
            dataType: "text",
            success: function (response) {
                console.log(response);
            }
        });
    },

    'checkAlerts': function (time) {
        var count = 0;
        setInterval(function () {
            $.ajax({
                url: "/users/me",
                method: "GET",
                data: "checkAlerts",
                dataType: "json",
                success: function (response) {
                    if (response[1].length >= 1)
                    {
                        var type = response[1][0].type;
                        count++;
                        $("#count-alerts").css('display', 'block');
                        $("#count-alerts").html(count);
                        $.ajax({
                            url: "/users/me",
                            method: "GET",
                            data: "updateAlerts&id_notifications="+response[1][0].id,
                            success: function (response) {
                                switch (type)
                                {
                                    case "likes":
                                        console.log('likes');
                                        break;
                                    default:
                                        break;
                                }
                            }
                       });
                    }
                }
            });
            $('#alert-users').click(function () {
                count = 0;
            });
        }, time);
    },

    'ready': function(event)
    {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading")
            event();
        else
            document.addEventListener('DOMContentLoaded', event);
    }
};

$.fn.extend({
    'animateCss': function(animationName, callback) {
        var animationEnd =
            'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    }
});

app.ready(function(){

    if (!cookies.getCookies())
        app.cookies();
    else
        document.getElementById('cookies').style.display = "none";
    window.onscroll = function () {
        app.checkScrolling()
    };

    if (sessionStorage.getItem('country') === "en")
        document.getElementById('f-country').src = "/design/images/flags/France.png";
    else if (sessionStorage.getItem('country') === "fr")
        document.getElementById('f-country').src = "/design/images/flags/usa.png";

    if (!sessionStorage.getItem('country')) {
        $.get("https://ipinfo.io", function (response) {
            if (response.country === "FR")
                document.getElementById('f-country').src = "/design/images/flags/usa.png";
            else
                document.getElementById('f-country').src = "/design/images/flags/France.png";
            app.translateModule(sessionStorage.getItem(response.country.toLowerCase()));
        }, "jsonp");
    }
    else
        app.translateModule(sessionStorage.getItem('country'));

    if (currentPath === "/") {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '822582524522862',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.12'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        var titles;
        titles = [' Aujourd\'hui est votre jour.',
            ' Rencontrez, discutez, échangez.',
            ' Détendez-vous, vous êtes sur Matcha.'];

        var titleR = titles[parseInt(Math.random() * titles.length)];
        document.title += titleR;

        $('#v-res').click(function () {
            $('#main-frame').animateCss('fadeOutRight', function () {
                document.getElementById('navigation').style.borderBottom = "1px solid #e5e5e5";
                document.getElementById('main-frame').style.display = "none";
                document.getElementById('login-screen').style.display = "flex";
                $('#login-screen').animateCss('fadeInLeftBig', function () {

                });
                document.getElementById('close').style.display = "flex";
                document.getElementById('flags').style.borderBottom = "1px solid #e5e5e5";
                document.getElementById('form-register').style.display = "none";
                document.getElementById('choice-box').style.display = "block";

            });
        });

        $('#btn-register').click(function (ev) {
            $('#main-frame').animateCss('fadeOutRight', function () {
                document.getElementById('navigation').style.borderBottom = "1px solid #e5e5e5";
                document.getElementById('main-frame').style.display = "none";
                document.getElementById('login-screen').style.display = "flex";
                $('#login-screen').animateCss('fadeInLeftBig', function () {

                });
                document.getElementById('close').style.display = "block";
                document.getElementById('close').style.display = "flex";
                document.getElementById('flags').style.borderBottom = "1px solid #e5e5e5";
                document.getElementById('choice-box').style.display = "none";
                document.getElementById('form-register').style.display = "block";
            });
            ev.preventDefault();
        });

        $('#close').click(function () {
            $('#login-screen').animateCss('fadeOutRight', function () {
                document.getElementById('navigation').style.borderBottom = "none";
                document.getElementById('main-frame').style.display = "flex";
                document.getElementById('login-screen').style.display = "none";
                $('#main-frame').animateCss('fadeInLeftBig', function () {

                });
                document.getElementById('close').style.display = "none";
                document.getElementById('flags').style.borderBottom = "none ";
                document.getElementById('choice-box').style.display = "block";
                document.getElementById('form-login').style.display = "none";
                document.getElementById('form-register').style.display = "none";
            });
        });

        $('#btn-login').click(function () {
            document.getElementById('choice-box').style.display = "none";
            document.getElementById('form-login').style.display = "block";
        });


        var m_username = document.getElementById('identifiant');
        var m_password = document.getElementById('password');
        var m_submit = document.getElementById('submit');

        var n_username = document.getElementById('identifiant-register');
        var n_email = document.getElementById('email-register');
        var n_password = document.getElementById('password-register');
        var n_birthday = document.getElementById('birthday-register');
        var n_submit = document.getElementById('submit-register');

        var errors = 5;

        m_submit.disabled = true;
        n_submit.disabled = true;

        m_username.onkeyup = function () {
            m_password.onkeyup = function () {
                m_submit.disabled = !(m_username.value.length > 0 && m_password.value.length > 0);
            };
            m_submit.disabled = !(m_username.value.length > 0 && m_password.value.length > 0);
        };

        n_username.onblur = function () {
            if (this.value.length > 0) {
                app.removeCss(this, 'style');
                if (errors > 0)
                    errors -= 1;
            } else {
                this.style.borderColor = "#ff6b6b";
                if (errors < 5)
                    errors += 1;
            }

            n_submit.disabled = errors > 0;
        };

        n_email.onblur = function () {
            if (this.value.length > 0) {
                app.removeCss(this, 'style');
                if (errors > 0)
                    errors -= 1;
            } else {
                this.style.borderColor = "#ff6b6b";
                if (errors < 5)
                    errors += 1;
            }

            n_submit.disabled = errors > 0;
        };


        n_password.onkeydown = function () {
            var ping = app.checkSecurity(this);
            if (ping === 0)
                this.style.background = "url('../design/images/ping-alert.png') no-repeat scroll 100%";
            else if (ping === 1)
                this.style.background = "url('../design/images/ping-warning.png') no-repeat scroll 100%";
            else if (ping >= 2)
                this.style.background = "url('../design/images/ping-check.png') no-repeat scroll 100%";
        };

        n_password.onblur = function () {
            if (this.value.length > 0) {
                this.style.borderColor = "#e5e5e5";
                if (errors > 0)
                    errors -= 1;
            } else {
                this.style.borderColor = "#ff6b6b";
                this.style.background = "url('../design/images/ping-alert.png') no-repeat scroll 100%";
                if (errors < 5)
                    errors += 1;
            }
            n_submit.disabled = errors > 0;
        };


        n_birthday.onblur = function () {
            if (this.value.length > 0) {
                app.removeCss(this, 'style');
                if (errors > 0)
                    errors--;
            } else {
                this.style.borderColor = "#ff6b6b";
                if (errors < 5)
                    errors += 1;
            }
            n_submit.disabled = errors > 0;
        };

        document.getElementById('cgu').onclick = function () {
            if (this.checked) {
                if (errors > 0)
                    errors -= 1;
            }
            else {
                if (errors < 5)
                    errors += 1;
            }
            n_submit.disabled = errors > 0;
        };
    }

    if (currentPath === "/admin")
    {
        document.body.style.overflow = "hidden";

        $('#nav li').click(function () {
            var active = document.querySelectorAll('li.hover')[0].id;
            var getID = this.id;

            if (!$(this).hasClass('hover')) {
                $(this).addClass('hover');
                $('#' + active).removeClass('hover');
            }

            if (getID != active)
            {
                $('section#' + active).fadeOut('fast', function () {
                    $('section#' + active).css('display', 'none');
                    $('section#' + getID).css('display', 'flex');
                });
            }
        });

        $("#users").click(function () {
            $.ajax({
                url: '/admin',
                method: 'GET',
                data: "loadPagination=1",
                success: function (response) {
                    $('#pagination').html(response);

                    $("#pagination a").click(function () {
                        var getID = $(this)[0].id;

                        $.ajax({
                            url: '/admin',
                            method: 'GET',
                            data: 'loadPagination='+getID,
                            success: function (response) {
                                $('#pagination').html(response);
                            },
                            error: function (response) {
                                console.log(response);
                            }
                        });

                        $.ajax({
                            url: '/admin',
                            method: 'GET',
                            data: 'loadUsers='+getID,
                            success: function (response) {
                                if (response)
                                {
                                    var data = JSON.parse(response);

                                    for (var i = 0; i < data.limit; i++)
                                    {
                                        var tr = document.querySelectorAll('#users tr')[i].querySelectorAll('td');
                                        for (var y = 0; y < tr.length; y++)
                                        {
                                           tr[y++].innerHTML = data['data'][i].id;
                                           tr[y++].innerHTML = data['data'][i].identifiant;
                                           tr[y++].innerHTML = data['data'][i].email;
                                           tr[y].innerHTML = "<span id='ascii' style='visibility: hidden'>"+data['data'][i].gender+"</span>";
                                           if (data['data'][i].gender === "M")
                                               tr[y++].innerHTML += '<i class="fas fa-mars" style="color: #74b9ff;"></i>';
                                           else
                                               tr[y++].innerHTML += '<i class="fas fa-venus" style="color: #fd79a8;"></i>';
                                           tr[y++].innerHTML = data['data'][i].firstname + ' ' + data['data'][i].lastname;
                                           tr[y++].innerHTML = data['data'][i].rating;
                                           tr[y].innerHTML = "<span id='status' style='visibility: hidden'>"+data['data'][i].status+"</span>";
                                           if (data['data'][i].status === 1)
                                               tr[y++].innerHTML += '<img src="/design/images/ping-check.png" width="24">';
                                           else
                                               tr[y++].innerHTML += '<img src="/design/images/ping-check.png" width="24">';
                                           tr[y++].innerHTML = data['data'][i].age;
                                           tr[y++].innerHTML = data['data'][i].created_at;
                                        }
                                    }
                                }
                            },
                            error: function (response) {
                                console.log(response);
                            }
                        });
                    });
                },
                error: function (response) {
                    console.log(response);
                }
            });
        });

        $('#reports tbody tr').click(function () {
            var tr = document.querySelectorAll('tr#' + $(this).attr('id'))[0];
            $.ajax({
                url: "/admin",
                method: "GET",
                data: "id="+tr.children[0].innerText,
                dataType: 'json',
                success: function (response) {
                    sessionStorage.setItem('id', response[0]['id']);
                    if (response)
                    {
                        $('#navigation-admin ul').fadeTo('slow', 0.8, function () {
                            $('#navigation-admin').css('cursor', 'not-allowed');
                            $('#navigation-admin li').css('pointer-events', 'none');
                        });
                        $('#reports .table').animateCss('fadeOut', function(){
                            $('#reports .table').css('display', 'none');
                            $('.report').css('display', 'flex');
                        });

                        if (response[0]['status'] === "En cours")
                        {
                            $('#header').html(
                                "<span><i class='fas fa-hashtag'></i>"+response[0]['id']+"</span>" +
                                "<span><b>"+response[0]['category']+"</b></span>" +
                                "<span><img src='/design/images/ping-warning.png'></span>"
                            );
                        }
                        else
                        {
                            $('#header').html(
                                "<span><i class='fas fa-hashtag'></i>"+response[0]['id']+"</span>" +
                                "<span><b>"+response[1]['identifiant']+"</b></span>" +
                                "<span><img src='/design/images/ping-check.png'></span>"
                            );
                        }

                        $('#profileTarget').html(
                            "<img src='"+response[1]['profile_picture']+"'>"
                        );

                        document.getElementById('name').innerHTML = response[1]['identifiant'];
                        document.getElementById('age').innerHTML = response[1]['age'];
                        document.getElementById('register').innerHTML = response[1]['created_at'];
                        document.getElementById('at').innerHTML = response[0]['create_at'];

                        var status;
                        if (response[2]['status'] === 1) {
                            document.querySelector('li#login').remove();
                            status = "check";
                        }
                        else {
                            document.getElementById('last-connection').innerHTML = response[2]['last_connection'];
                            status = "default";
                        }

                        $('#target-header').html(
                            "<span><i class='fas fa-hashtag'></i>"+response[2]['id']+"</span>" +
                            "<span><b>"+response[2]['firstname']+"</b></span>" +
                            "<span><img src='/design/images/ping-"+ status +".png' title='status'></span>"
                        );

                        $('#profile').html(
                            "<img src='"+response[2]['profile_picture']+"'>"
                        );

                        document.getElementById('nameTarget').innerHTML = response[2]['identifiant'];
                        document.getElementById('ageTarget').innerHTML = response[2]['age'];
                        document.getElementById('nbReports').innerHTML = response[3];
                        document.getElementById('registerTarget').innerHTML = response[2]['created_at'];
                        if (response[2]['ban'] == 1)
                            document.getElementById('status-target').innerHTML = "Suspendu";
                        else
                            document.getElementById('status-target').innerHTML = "Non suspendu";

                        if (response[0]['status'] === "Terminé")
                        {
                            $('#close').css('display', 'flex');

                            $('#by').html(response[0]['resolved_by']);
                            $('#date').html(response[0]['resolved_at']);
                        }

                        if (response[2]['ban'] == 1)
                        {
                            $("#remove_punishment").css('display', 'block');
                            $("#btn").css('display', 'none');
                        }
                        else if (response[2]['ban'] == 0)
                        {
                            $("#btn").css('display', 'block');
                            $("#remove_punishment").css('display', 'none');
                        }
                    }
                },
                error: function (response) {
                    console.log(response);
                }
            });
        });

        $('#close').click(function () {
            $('#reported').animateCss('fadeOut', function () {
                $('#reports .table').css('display', '');
                $('.report').css('display', 'none');
            });
            $('#navigation-admin ul').fadeTo('slow', 1, function () {
                $('#navigation-admin').css('cursor', 'auto');
                $('#navigation-admin li').css('pointer-events', 'auto');
            });
            $('#close').css('display', 'none');
        });

        $('#suspendre').click(function () {
            if (sessionStorage.getItem('id') !== undefined){
                $.ajax({
                    url: "/admin",
                    method: "GET",
                    data: "action=punishment&id="+sessionStorage.getItem('id'),
                    dataType: 'json',
                    success: function (response){
                        if (response)
                        {
                            app.notifications("L'opération s'est bien déroulé <i class='fas fa-check'></i>", '#A3CB38', '#C4E538');
                            $('#reported').animateCss('fadeOut', function () {
                                $('#reports .table').css('display', '');
                                $('.report').css('display', 'none');
                            });
                        }
                    },
                    error: function (response){
                        app.notifications("L'opération n'a pas fonctionnée <i class='fas fa-exclamation'></i>", 'ff3838', '#ff4d4d');
                        $('#reported').animateCss('fadeOut', function () {
                            $('#reports .table').css('display', '');
                            $('.report').css('display', 'none');
                        });
                    }
                });
            }
            $('#navigation-admin ul').fadeTo('slow', 1, function () {
                $('#navigation-admin').css('cursor', 'auto');
                $('#navigation-admin li').css('pointer-events', 'auto');
            });
            $('#close').css('display', 'none');
        });

        $('#remove_punishment').click(function () {
            $.ajax({
                url: "/admin",
                method: "GET",
                data: "action=remove_punishment&id="+sessionStorage.getItem('id'),
                dataType: 'json',
                success: function (response) {
                    app.notifications("L'opération s'est bien déroulé <i class='fas fa-check'></i>", '#A3CB38', '#C4E538');
                    $('#reported').animateCss('fadeOut', function () {
                        $('#reports .table').css('display', '');
                        $('.report').css('display', 'none');
                    });
                },
                error: function (response){
                    app.notifications("L'opération n'a pas fonctionnée <i class='fas fa-exclamation'></i>", 'ff3838', '#ff4d4d');
                    $('#reported').animateCss('fadeOut', function () {
                        $('#reports .table').css('display', '');
                        $('.report').css('display', 'none');
                    });
                }
            });
            $('#close').css('display', 'none');
            $('#navigation-admin ul').fadeTo('slow', 1, function () {
                $('#navigation-admin').css('cursor', 'auto');
                $('#navigation-admin li').css('pointer-events', 'auto');
            });
        });
    }

    if (currentPath == "/users/me")
    {
        $.ajax({
            url: "/users/me",
            method: "GET",
            data: "checkAlerts",
            dataType: "json",
            success: function (response) {
                if (response[0] > 0) {
                    $("#count-alerts").css('display', 'block');
                    $("#count-alerts").html(response[0]);
                }
            }
        });
        app.checkAlerts(10000);

        $('#alert-users').click(function () {
            $(this).toggleClass('active');
            $("#count-alerts").css('display', 'none');
            $("#count-alerts").html();

        });

        $('#submit-missing').click(function (ev) {
            $.ajax({
                url: currentPath,
                method: "GET",
                data: "action=missing_values&"+$('form').serialize(),
                dataType: 'json',
                success: function (response){
                    if (response)
                    {
                        $('#update-missing').fadeOut('slow');
                        app.notifications("Vos informations ont bien été mis à jour <i class='fas fa-check'></i>", '#A3CB38', '#C4E538');
                    }
                },
                error: function (response){
                    if (response)
                        app.notifications("Veuillez remplir tout les champs <i class='fas fa-times'></i>", '#ff3838', '#ff4d4d');
                }
            });
            ev.preventDefault();
        });
    }
});
