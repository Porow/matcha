var currentPath = window.location.pathname+window.location.search;
var upload = 0;
var errors = 0;

if (window.fb)
    upload = 1;

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

var stock = {
    id: 0
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
    relationShip: "",
    albums: null
};

var translateBook = {
    "Afin de vous proposer un site Internet optimal et de l'améliorer continuellement, nous utilisons des cookies. En poursuivant votre utilisation du site Internet, vous acceptez l'utilisation de cookies.": {
      en: "In order to offer you an optimal website and to continually improve it, we use cookies. By continuing your use of the website, you agree to the use of cookies.",
      fr: "Afin de vous proposer un site Internet optimal et de l'améliorer continuellement, nous utilisons des cookies. En poursuivant votre utilisation du site Internet, vous acceptez l'utilisation de cookies."
    },
    "Créer mon compte": {
        en: "Create my account",
        fr: "Créer mon compte"
    },
    "vues": {
        en: "visits",
        fr: 'vues'
    },
    "Sauvegarder": {
        en: "Save",
        fr: "Sauvegarder"
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
    },
    nameholder: {
        en: "Name",
        fr: "Prénom"
    },
    tags: {
        fr: "Voyages, Plages, Soleil",
        en: "Travels, Beachs, Sun..."
    },
    autoBio: {
      fr: "Décrivez-vous",
      en: "What about you?"
    },
    "Se décrire": {
        fr: "Se décrire",
        en: "About me"
    },
    "Prénom": {
        fr: "Prénom",
        en: "Name"
    },
    "Genre": {
        fr: "Genre",
        en: "I'm looking for"
    },
    "Homme": {
        fr: "Homme",
        en: "Man"
    },
    "Femme": {
        fr: "Femme",
        en: "Girl"
    },
    "Bisexuel": {
        fr: "Bisexuel",
        en: "Both"
    },
    "Situation": {
        fr: "Situation",
        en: "Relationship"
    },
    "Célibataire": {
        fr: "Célibataire",
        en: "Celibate"
    },
    "En couple": {
        fr: "En couple",
        en: "Couple"
    },
    "Télécharger depuis l'ordinateur": {
        fr: "Télécharger depuis l'ordinateur",
        en: "Upload from computer"
    },
    "Photo de profil": {
        fr: "Photo de profil",
        en: "Profile picture"
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

    'checkEmail': function (elem) {
        var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
        return pattern.test(elem);
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

    "geolocalisation": function()
    {
        $("#checkPlace")[0].offsetParent.children[2].style = 'left: 16px;top: 39px';
        $("#checkPlace")[0].offsetParent.children[2].innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
        navigator.geolocation.getCurrentPosition(function(position){
            $.ajax({
                method: 'GET',
                url: 'https://maps.googleapis.com/maps/api/geocode/json',
                data: 'latlng='+position.coords.latitude+','+position.coords.longitude+'&key=AIzaSyAiG2QdMpTXPZ859SV5VbQ8UzKhRR7wkMk',
                dataType: 'json',
                success: function (response) {
                    if (response.status == "OK")
                    {
                        var array = [];

                        for (var x in response.results)
                        {
                            array.push(response.results[x]);
                        }

                        var split = array[2].formatted_address.split(',').map(function(item){
                            return item.trim();
                        });

                        $('#place')[0].value = split[0] + ', ' + split[1];
                        $("#checkPlace")[0].offsetParent.children[2].innerHTML = '<svg width="24" height="24" viewBox="0 0 24 19"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>';
                        $("#checkPlace")[0].offsetParent.children[2].style = 'left: 12px;top: 35px';
                    }
                }
            });
        });
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
                    user.userID = userData.id;

                    $.ajax({
                        url: "/",
                        method: "GET",
                        data: user,
                        dataType: 'text',
                        success: function (response){
                           if (response)
                                window.location = "/users/onboarding";
                        }
                    });
                });
            }
        }, {scope: 'public_profile, email'});
    },

    'getAlbums': function ()
    {
        $.ajax({
            method: 'GET',
            url: 'me',
            data: 'getOauthFB',
            dataType: 'json',
            success: function(response){
               if (response)
               {
                   var access_token = response.access_token;
                   FB.api('/'+response.fb_id+'?fields=id,name,albums{id,name,cover_photo,count}&access_token='+response.access_token, function(response){
                       if (response)
                       {
                           var length = response.albums.data.length;
                           var albums = response.albums.data;

                           $('#contentModal').html('<div class="headerFB"> \n' +
                               '<p>Mes albums</p>' +
                               '</div>' +
                               '<div></div>' +
                               '<div class="fb-albums" id="fb-albums">' +

                               '</div>' +
                               '<div class="imagesAlbum none" id="imagesAlbum"></div>'+
                               '<button class="btn btn-stop" id="close">' +
                                   ' <span>' +
                                   '   Annuler' +
                                   ' </span>' +
                               '</button>'
                           );

                           var element = document.getElementById('fb-albums');
                           var i = 0, y = 0, name;

                           while (i < length)
                           {
                               if (albums[i].cover_photo)
                               {
                                   element.innerHTML += "<a href=" + albums[y].id + ">" +
                                       "<img src='https://graph.facebook.com/v2.12/" + albums[y].cover_photo.id + "/picture?access_token=" + access_token + "'>" +
                                       "<div class='infosAlbum'>"+
                                           "<h3 class='titleAlbum'>"+ albums[y].name +"</h3>" +
                                           "<span>"+ (albums[y].count - 1) +" photos</span>" +
                                           "<img src='https://tinder.com/static/build/9aaec88d3768447f90a4ee6460b6be9d.svg' style='width: 8px!important'>" +
                                       "</div>" +
                                       "</a>";
                                   element.innerHTML += "<hr>";
                                   y++;
                               }
                               i++;
                           }

                           $('#fb-albums a').on('click', function (ev) {
                               var albumID = $(this).attr('href');
                               var nameAlbum = $(this)[0].lastChild.children[0].innerText;

                               $('#fb-albums').fadeOut('fast');
                               $('#imagesAlbum').fadeIn('slow');

                               FB.api("https://graph.facebook.com/v2.12/"+albumID+"/photos?fields=source,images,name&access_token="+access_token, function (response) {
                                   if (response)
                                   {
                                       var image = response.data;
                                       var length = image.length;
                                       var element = document.getElementById('imagesAlbum');
                                       var i = 0, y = 0;

                                       $('.headerFB')[0].innerText = nameAlbum;

                                       while (i < length - 1)
                                       {
                                           element.innerHTML += "<a><img src="+ image[i].images[i].source +" title="+ image[i].name +"></a>";
                                           i++;
                                       }

                                       $('#imagesAlbum a').on('click', function (ev) {
                                           var src = $(this)[0].firstChild.currentSrc;
                                           $('#contentModal').html('<div class="title">\n' +
                                               '                </div>\n' +
                                               '                <div>' +
                                               '                   <img id="confirmUpload" src="'+src+'">' +
                                               ' <button type="button"  class="btn btn-instagram" id="add-img-fb">\n' +
                                               '                        Ajouter\n' +
                                               '                    </button>\n' +
                                               '                    <button class="btn btn-stop" id="close">\n' +
                                               '                        <span>\n' +
                                               '                            Annuler\n' +
                                               '                        </span>\n' +
                                               '                    </button>\n' +
                                               '</div>'
                                           );

                                           $('#close').on('click', function(){
                                               $('#modalManager').css('display', 'none');
                                               document.body.style.overflow = "auto";
                                               document.body.style.overflowX = "none";
                                           });

                                           $('#add-img-fb').on('click', function (ev) {
                                               $.ajax({
                                                   method: 'POST',
                                                   url: 'me',
                                                   data: 'type=fbimg&id='+stock.id+'&sender=fb&image='+src+'&csrf_token='+$('#csrf').attr('value'),
                                                   success: function (response) {
                                                       window.location = "me";
                                                   }
                                               });
                                               ev.preventDefault();
                                           });

                                           ev.preventDefault();
                                       });

                                       $('#close').on('click', function(){
                                           $('#modalManager').css('display', 'none');
                                           document.body.style.overflow = "auto";
                                           document.body.style.overflowX = "none";
                                       });
                                   }
                               });

                               ev.preventDefault();
                           });

                           $('#close').on('click', function(){
                               $('#modalManager').css('display', 'none');
                               document.body.style.overflow = "auto";
                               document.body.style.overflowX = "none";
                           });
                       }
                   });
               }
           }
        });
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

    "getUpload": function (input)
    {
        if (input.files && input.files[0] && !window.fb)
        {
            var sizeUpload = input.files[0].size;
            var photoName = input.files[0].name;
            var reader = new FileReader();

            if (Math.round(sizeUpload / 1000000) > 2) {
                app.notifications("Votre image '" + photoName + "' dépasse la taille limite (2 Mo)", 'ff3838', '#ff4d4d');
                input.files[0] = null;
                upload = 0;
            } else {
                document.getElementById('uploadFile').parentElement.childNodes[1].innerText = photoName + " (" + Math.round(sizeUpload / 1000000) + " Mo)";

                reader.onload = function (e) {
                    var data = e.target.result;
                    $('#profile_pictureIMG').attr('src', data);
                    upload = 1;
                }
                reader.readAsDataURL(input.files[0]);
                (errors === 0 && $('#name').val().length > 0 && $('#tags').val().length > 0 && $('#bio').val().length > 0
                    && ($('#relationship-single').hasClass('is-focus') || $('#relationship-couple').hasClass('is-focus')) && ($('#man').hasClass('is-focus') || $('#girls').hasClass('is-focus') || $('#both').hasClass('is-focus')) && upload === 1) ? $('#onboarding-submit').prop('disabled', false) :  $('#onboarding-submit').prop('disabled', true);
            }
        }
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
        }, time);
    },

    'readURL': function (input)
    {
        if (input.files && input.files[0])
        {
            var reader = new FileReader();
            var name = input.files[0].name;
            var size = input.files[0].size;
            var type = input.files[0].type;

            if (size > 2000000)
            {
                $('#modalManager').css('display', 'none');
                app.notifications("L'image est trop grande (2Mo max).", 'ff3838', '#ff4d4d');
            }else if (type !== "image/jpeg" && type !== "image/png" && type !== "image/jpg") {
                $('#modalManager').css('display', 'none');
                app.notifications("L'image n'est pas dans un bon format (jpg, jpeg, png).", 'ff3838', '#ff4d4d');
            }else{
                reader.onload = function (e) {
                    $('#contentModal').html('<div class="title">\n' +
                        '                    <h3>\n' +
                        '                        <span>\n' +
                        '                            ' + name + ' <br>' +
                        '                            <small> ' + type + ' ('+ (size/1000000) +'Mo)</small>' +
                        '                        </span>\n' +
                        '                    </h3>\n' +
                        '                </div>\n' +
                        '                <div>' +
                        '                   <img id="confirmUpload" src="'+e.target.result+'">' +
                       ' <button type="button"  class="btn btn-instagram" id="add-img-upload">\n' +
                            '                        Ajouter\n' +
                            '                    </button>\n' +
                    '                    <button class="btn btn-stop" id="close">\n' +
                    '                        <span>\n' +
                    '                            Annuler\n' +
                    '                        </span>\n' +
                    '                    </button>\n' +
                        '</div>'
                    );

                    $('#add-img-upload').on('click', function () {
                        $.ajax({
                            type: 'POST',
                            url: 'me',
                            data: 'image='+e.target.result+'&type='+type+'&id='+stock.id+'&csrf_token='+$('#csrf').attr('value'),
                            dataType: 'text',
                            success: function (response) {
                                window.location = "me";
                            }
                        });
                    });

                    $('#close').on('click', function(){
                        $('#modalManager').css('display', 'none');
                        document.body.style.overflow = "auto";
                        document.body.style.overflowX = "none";
                    });
                };
            }
            reader.readAsDataURL(input.files[0]);
        }
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

    setTimeout(function () {
        if ($('.flash').length)
           $('.flash').remove();
    }, 2000)

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

    if (!cookies.getCookies())
        app.cookies();
    else
        document.getElementById('cookies').style.display = "none";

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
        var titles;
        titles = [' Aujourd\'hui est votre jour.',
            ' Rencontrez, discutez, échangez.',
            ' Détendez-vous, vous êtes sur Matcha.'];

        var titleR = titles[parseInt(Math.random() * titles.length)];
        document.title += titleR;

        window.onscroll = function () {
            app.checkScrolling()
        };

        $('#btn-reset').click(function (ev) {
            $('#form-login').fadeOut('slow');
            $('#form-login').css('display', 'none');
            $('#form-reset').fadeIn('slow');
            $('#form-reset').css('display', 'block');
            $('#send-reset').css('display', 'block');
            ev.preventDefault();
        });

        $('#btn-send-reset').click(function (ev) {
            $.ajax({
                url: '/',
                method: 'GET',
                data: "action=reset&data="+$('#email-reset').val(),
                success: function (response) {
                    if (response == "success") {
                        app.notifications("Un code a été envoyé sur votre adresse e-mail <i class='fas fa-envelope'></i>", '#A3CB38', '#C4E538');
                        $('#send-reset').fadeOut('slow');
                        $('#send-reset').css('display', 'none');
                        $('#push-reset').fadeIn('slow');
                        $('#push-reset').css('display', 'block');
                    }
                    else
                        app.notifications("Cette adresse e-mail n'est pas enregistrée <i class='fas fa-times'></i>", '#ff3838', '#ff4d4d');
                },
                error: function (response) {
                    if (response === "error")
                        app.notifications("Cette adresse e-mail n'est pas enregistrée <i class='fas fa-times'></i>", '#ff3838', '#ff4d4d');
                }
            });
            ev.preventDefault();
        });

        $('#submit').click(function (ev) {
            $.ajax({
                url: '/',
                method: 'GET',
                data: "action=login&remember="+$('#remember').val()+"&identifiant="+$('#identifiant').val()+"&password="+$('#password').val(),
                success: function (response) {
                    if (response == "success") {
                        window.location = "/users/onboarding";
                    }

                    if (response === "error")
                        app.notifications("Votre identifiant ou mot de passe n'est pas correct <i class='fas fa-times'></i>", '#ff3838', '#ff4d4d');
                }
            });
            ev.preventDefault();
        })

        $('#btn-check-code').click(function (ev) {
            $.ajax({
                url: '/',
                method: 'GET',
                data: "action=checkCode&code="+$('#check-code').val(),
                success: function (response) {
                    if (response === "success") {
                        $('#push-reset').fadeOut('slow');
                        $('#push-reset').css('display', 'none');
                        $('#reset-password').fadeIn('slow');
                        $('#reset-password').css('display', 'block');

                        $('#btn-reset-password').click(function (ev) {
                            if (document.getElementById('reset_password').value === document.getElementById('reset_password_confirm').value) {
                                $.ajax({
                                    url: '/',
                                    method: 'GET',
                                    data: "action=resetPassword&password=" + $('#reset_password').val() + "&email=" + $('#email-reset').val(),
                                    success: function (response) {
                                        if (response == "success")
                                            window.location = "/users/me";
                                    }
                                });
                            }
                            else
                                app.notifications("Les deux mot de passe ne sont pas identiques <i class='fas fa-exclamation'></i>", '#ff3838', '#ff4d4d');
                            ev.preventDefault();
                        });
                    }else
                        app.notifications("Le code de vérification n'est pas correct <i class='fas fa-times'></i>", '#ff3838', '#ff4d4d');
                }
            });
            ev.preventDefault();
        });

        document.getElementById('email-reset').onkeyup = function () {
            if (this.value.length > 0 && app.checkEmail($('#email-reset').val()))
                $('#btn-send-reset').prop("disabled", false);
            else
                $('#btn-send-reset').prop("disabled", true);
        };

        document.getElementById('check-code').onkeyup = function () {
            if (this.value.length > 0)
                $('#btn-check-code').prop("disabled", false);
            else
                $('#btn-check-code').prop("disabled", true);
        };

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
                document.getElementById('form-reset').style.display = "none";
                document.getElementById('push-reset').style.display = "none";
                document.getElementById('reset-password').style.display = "none";
                document.getElementById('send-reset').style.display = "none";
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

        var errors_a = 5;

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
                if (errors_a > 0)
                    errors_a -= 1;
            } else {
                this.style.borderColor = "#ff6b6b";
                if (errors_a < 5)
                    errors_a += 1;
            }

            n_submit.disabled = errors_a > 0;
        };

        n_email.onblur = function () {
            if (this.value.length > 0) {
                app.removeCss(this, 'style');
                if (errors_a > 0)
                    errors_a -= 1;
            } else {
                this.style.borderColor = "#ff6b6b";
                if (errors_a < 5)
                    errors_a += 1;
            }

            n_submit.disabled = errors_a > 0;
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
                if (errors_a > 0)
                    errors_a -= 1;
            } else {
                this.style.borderColor = "#ff6b6b";
                this.style.background = "url('../design/images/ping-alert.png') no-repeat scroll 100%";
                if (errors_a < 5)
                    errors_a += 1;
            }
            n_submit.disabled = errors_a > 0;
        };


        n_birthday.onblur = function () {
            if (this.value.length > 0) {
                app.removeCss(this, 'style');
                if (errors_a > 0)
                    errors_a--;
            } else {
                this.style.borderColor = "#ff6b6b";
                if (errors_a < 5)
                    errors_a += 1;
            }
            n_submit.disabled = errors_a > 0;
        };

        document.getElementById('cgu').onclick = function () {
            if (this.checked) {
                if (errors_a > 0)
                    errors_a -= 1;
            }
            else {
                if (errors_a < 5)
                    errors_a += 1;
            }
            n_submit.disabled = errors_a > 0;
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
        window.onscroll = function () {
            app.checkScrolling()
        };

        var csrf = $("#csrf").attr('value');

        window.csrf = {csrf_token: csrf};

        $.ajaxSetup({
            response: window.csrf
        });

        $('#delete-img, #img1, #img2, #img3, #img4').on('click', function (event) {
            var type = $(this).parent()[0].children[0].lastElementChild.id;
            var src = $(this).parent()[0].children[0].lastElementChild.src;
            var idIMG = $(this).parent()[0].children[2].id.split('g').pop();
            document.body.style.overflow = "hidden";
            app.goTop();


            $('#modalManager').css('display', 'flex');

            $('#contentModal').html('<div class="title">\n' +
                '                    <h3>\n' +
                '                        <span>\n' +
                '                            Êtes-vous sûr(e) de vouloir <br>\n' +
                '                            supprimer cette photo ?\n' +
                '                        </span>\n' +
                '                    </h3>\n' +
                '                </div>\n' +
                '                <div></div>\n' +
                '                <div>\n' +
                '                    <button class="btn btn-instagram" id="delete-btn">\n' +
                '                        Supprimer\n' +
                '                    </button>\n' +
                '                    <button class="btn btn-stop" id="close">\n' +
                '                        <span>\n' +
                '                            Annuler\n' +
                '                        </span>\n' +
                '                    </button>\n' +
                '                </div>');

            $('#delete-btn').on('click', function () {
                $.ajax({
                    method: 'POST',
                    url: 'me',
                    data: "type="+type+"&src="+src+"&id="+idIMG+'&csrf_token='+csrf,
                    success: function(response){
                        if (response)
                        {
                            window.location = "me";
                            $('#modalManager').css('display', 'none');
                            $('#'+type).remove();
                            return true;
                        }
                    }
                });
                return false;
            });

            $('#close').on('click', function(){
                $('#modalManager').css('display', 'none');
                document.body.style.overflowY = "auto";
                document.body.style.overflowX = "none";
            });

            event.stopPropagation();
        });

        $('#add-img1, #add-img2, #add-img3, #add-img4, #add-img5').on('click', function (event) {
            var idIMG = $(this).parent()[0].children[2].id.split('g').pop();
            document.body.style.overflow = "hidden";
            app.goTop();

            $("#imgID").attr('value', idIMG);
            $('#modalManager').css('display', 'flex');

            var a = $("#imgID").attr('value');
            stock.id = a;

            if (window.fb)
            {
                $('#contentModal').html('<div class="title">\n' +
                    '                    <h3>\n' +
                    '                        <span>\n' +
                    '                            Ajouter une nouvelle photo <br>' +
                    '                            <small>png, jpg, jpeg <strong>(2Mo) max.</strong></small>' +
                    '                        </span>\n' +
                    '                    </h3>\n' +
                    '                </div>\n' +
                    '                <div></div>\n' +
                    '                <div>\n' +
                    '                    <div>' +
                    '                        <input type="file" id="my_file" accept="image/*" onchange="app.readURL(this);"> ' +
                    '                    <button type="button" class="btn btn-instagram" id="add-img-upload">\n' +
                    '                        Télécharger une photo \n' +
                    '                    </button>' +
                    '               </div>' +
                    '                    <div>' +
                    '                    <button class="btn btn-facebook" id="add-fb-img">\n' +
                    '                        <span>\n' +
                    '                            Facebook \n' +
                    '                        </span>\n' +
                    '                    </button>\n' +
                    '                   </div>' +
                    '                    <button class="btn btn-stop" id="close">\n' +
                    '                        <span>\n' +
                    '                            Annuler\n' +
                    '                        </span>\n' +
                    '                    </button>\n' +
                    '                </div>');

                $('#add-fb-img').on('click', function () {
                    app.getAlbums();
                });
            }
            else
            {
                $('#contentModal').html('<div class="title">\n' +
                    '                    <h3>\n' +
                    '                        <span>\n' +
                    '                            Ajouter une nouvelle photo <br>' +
                    '                            <small>png, jpg, jpeg <strong>(2Mo) max.</strong></small>' +
                    '                        </span>\n' +
                    '                    </h3>\n' +
                    '                </div>\n' +
                    '                <div></div>\n' +
                    '                <div>\n' +
                    '                    <div>' +
                    '                        <input type="file" id="my_file" accept="image/*" onchange="app.readURL(this);"> ' +
                    '                    <button type="button" class="btn btn-instagram" id="add-img-upload">\n' +
                    '                        Télécharger une photo \n' +
                    '                    </button>' +
                    '               </div>' +
                    '                    <button class="btn btn-stop" id="close">\n' +
                    '                        <span>\n' +
                    '                            Annuler\n' +
                    '                        </span>\n' +
                    '                    </button>\n' +
                    '                </div>');
            }

            $('#close').on('click', function(){
                $('#modalManager').css('display', 'none');
                document.body.style.overflowY = "auto";
                document.body.style.overflowX = "none";
            });

            $('#add-img-upload').on('click', function () {
               $('#my_file').click();
            });

            event.stopPropagation();
        });

        $('#contentModal').click(function (event) {
            event.stopPropagation();
        });

        $(window).click(function() {
            $('#modalManager').css('display', 'none');
            document.body.style.overflowY = "auto";
            document.body.style.overflowX = "none";
        });

        $('#logout-instagram').click(function () {
            $.ajax({
                method: 'GET',
                url: '/users/me',
                data: "logoutInstagram",
                success: function(response){
                   window.location = "me";
                }
            });
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

        $('#selectPhotos a').on('click', function (ev) {
            if (!$(this).hasClass('active'))
            {
                var link = document.querySelectorAll('#selectPhotos a');

                for (var i = 0; i < link.length; i++)
                {
                    if (link[(i == 0) ? i + 1 : i - 1].classList == "active")
                    {
                        link[(i == 0) ? i + 1 : i - 1].classList = "";
                        $(this).addClass('active');
                    }
                }
            }

            if ($(this).hasClass('active'))
            {
                var id = $(this)[0].id
                switch (id)
                {
                    case "myPictures":
                        $('#photos').css('display', 'block');
                        $('#instagram').css('display', 'none');
                        break;
                    case "instagramPictures":
                        $('#photos').css('display', 'none');
                        $('#instagram').css('display', 'flex');
                        break;
                    default:
                        break;
                }
            }

            ev.preventDefault();
        });

        var editable = 0;

        $('#myinfos-edit').on('click', function (ev) {
            var inputs = document.querySelectorAll('#myInfos input');
            var buttons = document.querySelectorAll('#myInfos button');

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false;
                inputs[i].value = inputs[i].placeholder;
            }

            for (var y = 0; y < 5; y++) {
                buttons[y].disabled = false;
            }

            $(this).animateCss('fadeOutRight', function () {
                $('#myinfos-edit').css('display', 'none');
                $('#myinfos-save').css('display', 'block');
                $('#myinfos-save').animateCss('fadeInLeft', function () {});
            });

            editable = 1;
            ev.preventDefault();
        });

        var relationship, genre;
        $('#genre button, #relationship button').on('click', function (ev) {
            var parent = $(this).parent()[0].id;
            var qButton = document.querySelectorAll('#'+parent+' button');

            for (var i = 0; i < qButton.length; i++)
            {
                if ($(qButton[i + 1]).hasClass('is-focus'))
                    $(qButton[i + 1]).removeClass('is-focus');
                i++;
                if ($(qButton[i - 1]).hasClass('is-focus'))
                    $(qButton[i - 1]).removeClass('is-focus');
            }

            $(this).toggleClass('is-focus');
            if (app.hasClass(this, 'is-focus') && parent === "relationship")
                relationship = $(this).attr('id');
            else
                genre = $(this).attr('id');

            ev.preventDefault();
        });

        $('#myinfos-save').on('click', function (ev) {
            var inputs = document.querySelectorAll('#myInfos input');
            var buttons = document.querySelectorAll('#myInfos button');

            for (var i = 0; i < inputs.length; i++)
            {
                if ($('#'+inputs[i].id).val().length <= 0)
                {
                    var elemID = inputs[i].offsetParent.children[1].id;
                    $('#'+elemID).css('border-color', '#ff4d4d');
                }
            }

            function checkLength(elem)
            {
                return ($('#'+elem).val().length > 0);
            }

            if (checkLength('email') && checkLength('name') && checkLength('birthday') && checkLength('place') && checkLength('biography') && checkLength('tags') && ($('#relationship-single').hasClass('is-focus') || $('#relationship-couple').hasClass('is-focus')) && ($('#man').hasClass('is-focus') || $('#girls').hasClass('is-focus') || $('#both').hasClass('is-focus')))
            {
                $.ajax({
                    method: 'POST',
                    url: 'me',
                    data: 'updateInfosUser&email='+$('#email').val()+'&name='+$('#name').val()+'&birthday='+$('#birthday').val()+'&place='+$('#place').val()+'&biography='+$('#biography').val()+'&tags='+$('#tags').val()+'&relationship='+relationship+'&orientation='+genre+'&csrf_token='+$('#csrf').attr('value'),
                    success: function (response) {
                        window.location = "me";
                    }
                });
            }
            ev.preventDefault();
        });

        $('#checkPlace').on('click', function () {
           if (editable)
               app.geolocalisation();
        });

        $('#edit-password').on('click', function (ev) {
            $('#myInfos').animateCss('fadeOutRight', function () {
                $('#myInfos').css('display', 'none');
                $('#editPassword').animateCss('fadeInLeft', function (){

                });
                $('#editPassword').css('display', 'flex');
                app.slideClick('editPassword');
            });
            ev.preventDefault();
        });

        setInterval(function () {
            if ($('#old-password').val().length > 0 && $('#new-password').val().length > 0 && $('#confirm-password').val().length > 0)
            {
                if ($('#new-password').val() === $('#confirm-password').val()) {
                    $('#btn-editPassword').prop('disabled', false);
                    $('#new-password').css('border-color', '#e5e5e5');
                    $('#confirm-password').css('border-color', '#e5e5e5');
                } else {
                    $('#new-password').css('border-color', '#ff4d4d');
                    $('#confirm-password').css('border-color', '#ff4d4d');
                }
            }
            else {
                $('#btn-editPassword').prop('disabled', true);
            }
        }, 1);

        $('#btn-editPassword').on('click', function () {
            var data = {
                old_password: $('#old-password').val(),
                new_password: $('#new-password').val(),
                csrf_token: $('#csrf').attr('value')
            };

            $.ajax({
                method: 'POST',
                url: 'me',
                data: data,
                success: function (response) {
                    if (response)
                        window.location = "me";
                }
            });
        });

        $('#backTo').on('click', function () {
            $('#editPassword').animateCss('fadeOutRight', function () {
                $('#editPassword').css('display', 'none');
                $('#myInfos').animateCss('fadeInLeft', function (){

                });
                $('#myInfos').css('display', 'flex');
            });
        });

        $('#myinfos-delete').on('click', function (ev) {
            app.goTop();
            $('#modalManager').css('display', 'flex');
            document.body.style.overflow = "hidden";

            $('#contentModal').html('<div class="title">\n' +
                '                    <h3>\n' +
                '                        <span>\n' +
                '                             Êtes vous sur de vouloir supprimer votre compte ? ' +
                '                        </span>\n' +
                '                    </h3>\n' +
                '                </div>\n' +
                '                <div></div>\n' +
                '                <div>\n' +
                '                    <div>' +
                '                    <button type="button" class="btn btn-instagram" id="deleteAccount">\n' +
                '                        Je supprime mon compte \n' +
                '                    </button>' +
                '               </div>' +
                '                    <button class="btn btn-stop" id="close">\n' +
                '                        <span>\n' +
                '                            Annuler\n' +
                '                        </span>\n' +
                '                    </button>\n' +
                '                </div>');

            $('#deleteAccount').on('click', function () {
                $.ajax({
                    method: 'POST',
                    url: 'me',
                    data: 'deleteAccount&+csrf_token='+$('#csrf').val(),
                    success: function (response) {
                        window.location = "../";
                    }
                });
            })

            $('#close').on('click', function(){
                $('#modalManager').css('display', 'none');
                document.body.style.overflowY = "auto";
                document.body.style.overflowX = "none";
            });

            $('#add-img-upload').on('click', function () {
                $('#my_file').click();
            });

            event.stopPropagation();
        });

        function loadMatchs()
        {
            $("#matchs").empty();
            $('#matchs').removeClass('center');

            $('#matchs').css('display', 'none');
            $('#loading-request').css('display', 'block');
            setTimeout(function(){
                $('#loading-request').animateCss('fadeOutRight', function () {
                    $('#loading-request').hide();
                    $('#matchs').css('display', 'flex');
                });
                window.tmp = 1;
            }, 1500);
            $.ajax({
                method: 'POST',
                url: 'me',
                data: 'getMatchs',
                dataType: 'json',
                success: function (response) {
                    if (response)
                    {
                        var matchID = response[0].id;

                        for (var i = 0; i < response.length; i++)
                        {
                            if (window.id != response[i].user1)
                                var userID = response[i].user1;
                            else
                                var userID = response[i].user2;
                            $.ajax({
                                method: 'POST',
                                url: 'me',
                                data: 'getUser&userID=' + userID,
                                dataType: 'json',
                                success: function (response) {
                                    var status = response.status;

                                    if (status === 1)
                                        var type = "ping-check.png";
                                    else
                                        var type = "ping-default.png";

                                    document.getElementById('matchs').innerHTML += '<div class="profil-user" id="' + response.id + '">\n' +
                                        '                <div class="infos">\n' +
                                        '                    <span id="name">' + response.name + '</span>,\n' +
                                        '                    <span id="age">' + response.age + '</span>\n' +
                                        '                    <span id="status">\n' +
                                        '                        <img src="/design/images/' + type + '" width="16">\n' +
                                        '                    </span>\n' +
                                        '                    <br>\n' +
                                        '                    <span id="place">\n' +
                                        '                        ' + response.place + ' \n' +
                                        '                    </span>\n' +
                                        '                </div>\n' +
                                        '                <img id="imgMatchUser" src="' + response.photo + '" alt="">\n' +
                                        '            </div>';

                                    if (window.matchMedia("(max-width: 489px)").matches) {
                                        $('.profil-user').on('click', function () {
                                            var user_id = $(this).attr('id');

                                            $('#matchs').animateCss('fadeOutRight', function () {
                                                $('#matchs').css('display', 'none');
                                                $('.options-aff').hide();

                                                $('#profilUser').animateCss('fadeInLeft', function () {
                                                });
                                                $('#profilUser').css('display', 'flex');
                                            });

                                            $.ajax({
                                                method: 'POST',
                                                url: 'me',
                                                data: 'getUser&userID=' + user_id,
                                                dataType: 'json',
                                                success: function (response) {
                                                    if (response) {
                                                        var picture = response.photo;
                                                        var status = response.status;

                                                        if (response.relationship === "relationship-single")
                                                            var relationship = "Célibataire";
                                                        else
                                                            var relationship = "En couple";

                                                        if (status === 1)
                                                            var type = "ping-check.png";
                                                        else
                                                            var type = "ping-default.png";

                                                        if (status === 1)
                                                            $('.user-header').html('<h3>' + response.name + ', ' + response.age + '<img src="/design/images/' + type + '" style="margin-top: -3px;"></h3>');
                                                        else
                                                            $('.user-header').html('<h3 style="margin-bottom: 0px;">' + response.name + ', ' + response.age + '<img src="/design/images/' + type + '" style="margin-top: -3px;"></h3><small class="trn">Dernière connexion : <strong>' + response.lastLogin + '</strong></small>');

                                                        $('.user-photos').html('<img src="' + picture + '" style="height: 255px;width: 255px;margin-bottom: 10px;">');

                                                        $.ajax({
                                                            method: 'POST',
                                                            url: 'me',
                                                            data: 'getImages&userID=' + user_id,
                                                            dataType: 'json',
                                                            success: function (response) {
                                                                if (response) {
                                                                    for (var i = 0; i < response.length; i++)
                                                                        $('.user-photos').append('<img src="' + response[i].data_img + '" style="height: 120px;width: 120px;margin-bottom: 10px;margin-right: 5px;margin-left: 5px;">');
                                                                }
                                                            },
                                                            error: function (response) {
                                                                for (var i = 0; i < 4; i++)
                                                                    $('.user-photos').append('<div style="background-color: #f1f1f1;border: 1px solid #d3d3d3;height: 120px;width: 120px;margin-bottom: 10px;margin-right: 5px;margin-left: 5px;"></div>');
                                                            }
                                                        });

                                                        $('#relationship-user').text(relationship);
                                                        $('#local-user').text(response.place);
                                                        $('#score-user').text(response.score);
                                                        $('#biographie-user').text(response.bio);

                                                        $.ajax({
                                                            method: 'POST',
                                                            url: 'me',
                                                            data: 'getInstagram&userID=' + user_id,
                                                            dataType: 'json',
                                                            success: function (response) {
                                                                if (response) {
                                                                    var username = response.data[0].user.username;

                                                                    $('.user-instagram').append('<a target="_blank" href="https://www.instagram.com/' + username + '/">' +
                                                                        '<h5 style="color: #E9417D">@' + username + '</h5>' +
                                                                        '</a>'
                                                                    );

                                                                    $('.user-instagram').append('<div class="images-insta">');
                                                                    for (var i = 0; i < response.data.length; i++) {
                                                                        $('.images-insta').append('<a target="_blank" href="' + response.data[i].link + '"><img src="' + response.data[i].images.standard_resolution.url + '" style="height: 100px;width: 100px;margin-bottom: 10px;margin-right: 5px;margin-left: 5px;"></a>');
                                                                    }
                                                                    $('.user-instagram').append('</div>');
                                                                }
                                                            },
                                                            error: function (response) {
                                                                $('.actionsMatch').css('bottom', '-140px');
                                                            }
                                                        });

                                                        $('#delete-match').on('click', function () {
                                                            $.ajax({
                                                                method: 'POST',
                                                                url: 'me',
                                                                data: 'deleteMatch&matchID=' + matchID + '&csrf_token=' + $('#csrf').val(),
                                                                success: function (response) {
                                                                    $('#profilUser').animateCss('fadeOutRight', function () {
                                                                        $('#profilUser').css('display', 'none');
                                                                        $('.options-aff').show();
                                                                        $('#matchs').animateCss('fadeInLeft', function () {
                                                                        });
                                                                        $('#matchs').css('display', 'flex');
                                                                    });

                                                                    $('.user-header').empty();
                                                                    $('.user-photos').empty();
                                                                    $('.user-instagram').empty();
                                                                    $('#relationship-user').empty();
                                                                    $('#local-user').empty();
                                                                    $('#score-user').empty();
                                                                    $('#biographie-user').empty();

                                                                    $('#matchs').empty();

                                                                    loadMatchs();
                                                                }
                                                            });
                                                        });

                                                        $('#close-match').on('click', function () {
                                                            $('#profilUser').animateCss('fadeOutRight', function () {
                                                                $('#profilUser').css('display', 'none');
                                                                $('.options-aff').show();
                                                                $('#matchs').animateCss('fadeInLeft', function () {
                                                                });
                                                                $('#matchs').css('display', 'flex');
                                                            });
                                                            $('.user-header').empty();
                                                            $('.user-photos').empty();
                                                            $('.user-instagram').empty();
                                                            $('#relationship-user').empty();
                                                            $('#local-user').empty();
                                                            $('#score-user').empty();
                                                            $('#biographie-user').empty();
                                                        });
                                                    }
                                                }
                                            });
                                        });
                                    }
                                }
                            })
                        }

                        if (response.length > 2)
                            $('.goSection').css('display', 'flex');
                        else
                            $('.goSection').css('display', 'none');
                    }
                },
                error: function (response) {
                    $('#matchs').addClass('center');
                    $("#matchs").append("<h5 style='font-style: italic;text-transform: uppercase;font-weight: 600;color: rgb(139, 142, 145);'>Vous n'avez pas encore de match</h5>");
                    $("#matchs").append('<div class="no-matchs"></div>');
                }
            });
        }

        function loadLikes()
        {
            $("#likes").empty();
            $('#likes').removeClass('center');

            $('#likes').css('display', 'none');
            $('#loading-request').css('display', 'block');
            setTimeout(function(){
                $('#loading-request').animateCss('fadeOutRight', function () {
                    $('#loading-request').hide();
                    $('#likes').css('display', 'flex');
                });
                window.tmp = 1;
            }, 1500);
            $.ajax({
                method: 'POST',
                url: 'me',
                data: 'getLikes',
                dataType: 'json',
                success: function (response) {
                    console.log(response);
                    if (response)
                    {
                        /*var matchID = response[0].id;

                        for (var i = 0; i < response.length; i++)
                        {
                            if (window.id != response[i].user1)
                                var userID = response[i].user1;
                            else
                                var userID = response[i].user2;
                            $.ajax({
                                method: 'POST',
                                url: 'me',
                                data: 'getUser&userID=' + userID,
                                dataType: 'json',
                                success: function (response) {
                                    var status = response.status;

                                    if (status === 1)
                                        var type = "ping-check.png";
                                    else
                                        var type = "ping-default.png";

                                    document.getElementById('matchs').innerHTML += '<div class="profil-user" id="' + response.id + '">\n' +
                                        '                <div class="infos">\n' +
                                        '                    <span id="name">' + response.name + '</span>,\n' +
                                        '                    <span id="age">' + response.age + '</span>\n' +
                                        '                    <span id="status">\n' +
                                        '                        <img src="/design/images/' + type + '" width="16">\n' +
                                        '                    </span>\n' +
                                        '                    <br>\n' +
                                        '                    <span id="place">\n' +
                                        '                        ' + response.place + ' \n' +
                                        '                    </span>\n' +
                                        '                </div>\n' +
                                        '                <img id="imgMatchUser" src="' + response.photo + '" alt="">\n' +
                                        '            </div>';

                                    if (window.matchMedia("(max-width: 489px)").matches) {
                                        $('.profil-user').on('click', function () {
                                            var user_id = $(this).attr('id');

                                            $('#matchs').animateCss('fadeOutRight', function () {
                                                $('#matchs').css('display', 'none');
                                                $('.options-aff').hide();

                                                $('#profilUser').animateCss('fadeInLeft', function () {
                                                });
                                                $('#profilUser').css('display', 'flex');
                                            });

                                            $.ajax({
                                                method: 'POST',
                                                url: 'me',
                                                data: 'getUser&userID=' + user_id,
                                                dataType: 'json',
                                                success: function (response) {
                                                    if (response) {
                                                        var picture = response.photo;
                                                        var status = response.status;

                                                        if (response.relationship === "relationship-single")
                                                            var relationship = "Célibataire";
                                                        else
                                                            var relationship = "En couple";

                                                        if (status === 1)
                                                            var type = "ping-check.png";
                                                        else
                                                            var type = "ping-default.png";

                                                        if (status === 1)
                                                            $('.user-header').html('<h3>' + response.name + ', ' + response.age + '<img src="/design/images/' + type + '" style="margin-top: -3px;"></h3>');
                                                        else
                                                            $('.user-header').html('<h3 style="margin-bottom: 0px;">' + response.name + ', ' + response.age + '<img src="/design/images/' + type + '" style="margin-top: -3px;"></h3><small class="trn">Dernière connexion : <strong>' + response.lastLogin + '</strong></small>');

                                                        $('.user-photos').html('<img src="' + picture + '" style="height: 255px;width: 255px;margin-bottom: 10px;">');

                                                        $.ajax({
                                                            method: 'POST',
                                                            url: 'me',
                                                            data: 'getImages&userID=' + user_id,
                                                            dataType: 'json',
                                                            success: function (response) {
                                                                if (response) {
                                                                    for (var i = 0; i < response.length; i++)
                                                                        $('.user-photos').append('<img src="' + response[i].data_img + '" style="height: 120px;width: 120px;margin-bottom: 10px;margin-right: 5px;margin-left: 5px;">');
                                                                }
                                                            },
                                                            error: function (response) {
                                                                for (var i = 0; i < 4; i++)
                                                                    $('.user-photos').append('<div style="background-color: #f1f1f1;border: 1px solid #d3d3d3;height: 120px;width: 120px;margin-bottom: 10px;margin-right: 5px;margin-left: 5px;"></div>');
                                                            }
                                                        });

                                                        $('#relationship-user').text(relationship);
                                                        $('#local-user').text(response.place);
                                                        $('#score-user').text(response.score);
                                                        $('#biographie-user').text(response.bio);

                                                        $.ajax({
                                                            method: 'POST',
                                                            url: 'me',
                                                            data: 'getInstagram&userID=' + user_id,
                                                            dataType: 'json',
                                                            success: function (response) {
                                                                if (response) {
                                                                    var username = response.data[0].user.username;

                                                                    $('.user-instagram').append('<a target="_blank" href="https://www.instagram.com/' + username + '/">' +
                                                                        '<h5 style="color: #E9417D">@' + username + '</h5>' +
                                                                        '</a>'
                                                                    );

                                                                    $('.user-instagram').append('<div class="images-insta">');
                                                                    for (var i = 0; i < response.data.length; i++) {
                                                                        $('.images-insta').append('<a target="_blank" href="' + response.data[i].link + '"><img src="' + response.data[i].images.standard_resolution.url + '" style="height: 100px;width: 100px;margin-bottom: 10px;margin-right: 5px;margin-left: 5px;"></a>');
                                                                    }
                                                                    $('.user-instagram').append('</div>');
                                                                }
                                                            },
                                                            error: function (response) {
                                                                $('.actionsMatch').css('bottom', '-140px');
                                                            }
                                                        });

                                                        $('#delete-match').on('click', function () {
                                                            $.ajax({
                                                                method: 'POST',
                                                                url: 'me',
                                                                data: 'deleteMatch&matchID=' + matchID + '&csrf_token=' + $('#csrf').val(),
                                                                success: function (response) {
                                                                    $('#profilUser').animateCss('fadeOutRight', function () {
                                                                        $('#profilUser').css('display', 'none');
                                                                        $('.options-aff').show();
                                                                        $('#matchs').animateCss('fadeInLeft', function () {
                                                                        });
                                                                        $('#matchs').css('display', 'flex');
                                                                    });

                                                                    $('.user-header').empty();
                                                                    $('.user-photos').empty();
                                                                    $('.user-instagram').empty();
                                                                    $('#relationship-user').empty();
                                                                    $('#local-user').empty();
                                                                    $('#score-user').empty();
                                                                    $('#biographie-user').empty();

                                                                    $('#matchs').empty();

                                                                    loadMatchs();
                                                                }
                                                            });
                                                        });

                                                        $('#close-match').on('click', function () {
                                                            $('#profilUser').animateCss('fadeOutRight', function () {
                                                                $('#profilUser').css('display', 'none');
                                                                $('.options-aff').show();
                                                                $('#matchs').animateCss('fadeInLeft', function () {
                                                                });
                                                                $('#matchs').css('display', 'flex');
                                                            });
                                                            $('.user-header').empty();
                                                            $('.user-photos').empty();
                                                            $('.user-instagram').empty();
                                                            $('#relationship-user').empty();
                                                            $('#local-user').empty();
                                                            $('#score-user').empty();
                                                            $('#biographie-user').empty();
                                                        });
                                                    }
                                                }
                                            });
                                        });
                                    }
                                }
                            })
                        }

                        if (response.length > 2)
                            $('.goSection').css('display', 'flex');
                        else
                            $('.goSection').css('display', 'none');*/
                    }
                },
                error: function (response) {
                    $('#likes').addClass('center');
                    $("#likes").append("<h5 style='font-style: italic;text-transform: uppercase;font-weight: 600;color: rgb(139, 142, 145);'>Vous n'avez pas encore de likes</h5>");
                    $("#likes").append('<div class="no-likes"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M19.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.35 1.668-2.833 3.329-.373 1.283-.794 2.341-1.254 3.22-.038-.643-.475-1.611-.928-2.08l-.796.625c.39.328.835 1.352.816 1.906-.561.138-1.404-.067-1.91-.344l-.256.967c.557.266 1.557.491 2.164.377-1.842 2.44-4.1 2.794-6.236 3.072v9.928c3.503 0 5.584.729 8.169 1.842 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-6.07-.597l-2.601-1.05c.198-.37.389-.772.575-1.201l2.359.778c-.1.5-.213.989-.333 1.473zm.505-2.518l-2.138-.705c.148-.396.292-.816.432-1.259l1.833.548c-.021.487-.062.961-.127 1.416zm.144-2.527l-1.529-.457c.773-2.332 1.429-1.537 1.529.457zm3.911 10.501s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c2.257-.518 4.419-1.401 6.197-4.164 1.365.705 5.609 2.524 9.002 2.714 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg></div>');
                }
            });
        }

        window.tmp = 0;

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 1735 && window.tmp == 0)
            {
                loadMatchs();
                $(window).unbind('scroll');
            }
        });

        $('#btn-affinity, #load-match').on('click', function (ev) {
            loadMatchs();
            $('#profilUser').css('display', 'none');
            $('.options-aff').show();
            ev.preventDefault();
        });

       $('#load-likes').on('click', function (ev) {
            loadLikes();
            $('#profilUser').css('display', 'none');
            $('.options-aff').show();
            ev.preventDefault();
        });

        var elem = document.querySelectorAll('.options-aff a');
        var name;

        for (var i = 0; i < elem.length; i++)
        {
            if (elem[i].className == "active")
                name = elem[i].innerText.toLowerCase();
        }

        $('.options-aff a').on('click', function (ev) {
            var parent = $(this).parent();
            var count = parent[0].children.length;
            var select = parent[0].children;
            var id = $(this)[0].innerText.toLowerCase();

            if ($(this).hasClass('active'));
            else
            {
                if (window.tmp == 1)
                {
                    for (var i = 0; i < count; i++)
                    {
                        if (parent[0].children[i] != this && $(parent[0].children[i])[0].className === "active");
                        $(parent[0].children[i])[0].className = "";
                    }
                    $(this).addClass('active');

                    $('#'+name).css('display', 'none');
                    $('#loading-request').css('display', 'block');

                    setTimeout(function(){
                        $('#loading-request').animateCss('fadeOutRight', function () {
                            $('#loading-request').hide();
                            $('#'+id).css('display', 'flex');
                            for (var i = 0; i < elem.length; i++)
                            {
                                if (elem[i].className == "active")
                                    name = elem[i].innerText.toLowerCase();
                            }
                        });
                    }, 1500);
                }
            }
            ev.preventDefault();
        });
    }

    if (currentPath == "/users/onboarding")
    {
        navigator.geolocation.getCurrentPosition(function(position){
            $.ajax({
                method: 'GET',
                url: 'https://maps.googleapis.com/maps/api/geocode/json',
                data: 'latlng='+position.coords.latitude+','+position.coords.longitude+'&key=AIzaSyAiG2QdMpTXPZ859SV5VbQ8UzKhRR7wkMk',
                dataType: 'json',
                success: function (response) {
                    if (response.status == "OK")
                    {
                        var array = [];

                        for (var x in response.results)
                        {
                            array.push(response.results[x]);
                        }

                        var split = array[2].formatted_address.split(',').map(function(item){
                            return item.trim();
                        });

                        $('#place')[0].value = split[0] + ', ' + split[1];
                    }
                }
            });
        });

        var csrf = $("#csrf").attr('value');

        window.csrf = {csrf_token: csrf};

        $.ajaxSetup({
            response: window.csrf
        });

        $('#goToTop').remove();
        var btnUpdate = document.getElementById('onboarding-submit');
        var inputs = document.querySelectorAll('input');
        var buttons = document.querySelectorAll('button');

        setTimeout(function () {
            for(var i = 0; i < inputs.length; i++)
            {
                if (inputs[i].id !== "uploadFile")
                {
                    $('#'+inputs[i].id).on('blur', function () {
                        if (!$(this).val())
                        {
                            if (errors == 0)
                                errors++;
                        }
                        else
                        {
                            if (errors == 1)
                                errors--;
                        }
                        (errors === 0 && $('#name').val().length > 0 && $('#tags').val().length > 0 && $('#bio').val().length > 0
                            && ($('#relationship-single').hasClass('is-focus') || $('#relationship-couple').hasClass('is-focus')) && ($('#man').hasClass('is-focus') || $('#girls').hasClass('is-focus') || $('#both').hasClass('is-focus')) && upload === 1) ? $('#onboarding-submit').prop('disabled', false) :  $('#onboarding-submit').prop('disabled', true);
                    });
                }
            }
            for (var y = 1; y < buttons.length - 2; y++)
            {
                $('#'+buttons[y].id).on('click', function () {
                    if (!$(this).hasClass('is-focus'))
                    {
                        if (errors == 0)
                            errors++;
                    }
                    else
                    {
                        if (errors == 1)
                            errors--;
                    }
                    (errors === 0 && $('#name').val().length > 0 && $('#tags').val().length > 0 && $('#bio').val().length > 0
                        && ($('#relationship-single').hasClass('is-focus') || $('#relationship-couple').hasClass('is-focus')) && ($('#man').hasClass('is-focus') || $('#girls').hasClass('is-focus') || $('#both').hasClass('is-focus')) && upload === 1) ? $('#onboarding-submit').prop('disabled', false) :  $('#onboarding-submit').prop('disabled', true);
                });
            }
        }, 130);


        setInterval(function () {
            (errors === 0 && $('#name').val().length > 0 && $('#tags').val().length > 0 && $('#bio').val().length > 0
                && ($('#relationship-single').hasClass('is-focus') || $('#relationship-couple').hasClass('is-focus')) && ($('#man').hasClass('is-focus') || $('#girls').hasClass('is-focus') || $('#both').hasClass('is-focus')) && upload === 1) ? $('#onboarding-submit').prop('disabled', false) : $('#onboarding-submit').prop('disabled', true);
            }, 1);

        setTimeout(function(){
            $('#loading-onboarding').addClass('is-hidden');
        }, 1500);

        var relationship, genre;

        $('#genre button, #relationship button').on('click', function () {
            var parent = $(this).parent()[0].id;
            var qButton = document.querySelectorAll('#'+parent+' button');

            for (var i = 0; i < qButton.length; i++)
            {
                if ($(qButton[i + 1]).hasClass('is-focus'))
                    $(qButton[i + 1]).removeClass('is-focus');
                i++;
                if ($(qButton[i - 1]).hasClass('is-focus'))
                    $(qButton[i - 1]).removeClass('is-focus');
            }

            $(this).toggleClass('is-focus');
            if (app.hasClass(this, 'is-focus') && parent === "relationship" && parent !== "profile_picture")
                relationship = $(this).attr('id');
            else
                genre = $(this).attr('id');
        });

        $('#onboarding-submit').on('click', function(ev){

            if (window.fb)
                var picture = $('#fbPic').attr('src');
            else
                var picture = $('#profile_pictureIMG').attr('src');

            var data = {
                name: $('#name').val(),
                tags: $('#tags').val(),
                bio: $('#bio').val(),
                genre: genre,
                relationship: relationship,
                picture: picture,
                place: $('#place').attr('value'),
                csrf_token: csrf
            };

            $.ajax({
                method: 'POST',
                url: 'onboarding',
                data: data,
                success: function (response) {
                    if (response)
                        window.location = "me";
                }
            });
            ev.preventDefault();
        });
    }
    if (currentPath == "/swipe")
    {
        document.body.style.backgroundColor = "#f1f1f1";

        setTimeout(function(){
            $('#load').addClass('loaded tinder');
        }, 5000);

        $('#tinder').removeClass('loading-end');

        $('#minimize_pannel').click(function () {
            $("#pannel").slideToggle(400);
            $("#select").toggleClass("selection-toggle");
            $("#nope").toggleClass("tinder--buttons--deactivated");
            $("#nope").toggle('active');
            $("#love").toggleClass("tinder--buttons--deactivated");
            $("#love").toggle('active');
            $('#tinder').toggle('active');
        });

        $('#pannel_search').click(function () {
            $("#pannel").slideToggle(400);
            $("#select").toggleClass("selection-toggle");
            $("#nope").toggleClass("tinder--buttons--deactivated");
            $("#nope").toggle('active');
            $("#love").toggleClass("tinder--buttons--deactivated");
            $("#love").toggle('active');
            $('#tinder').toggle('active');
        });

        $('#back-to-swipe').click(function () {
            $("#modal-manager").slideToggle(400);
            match = 0;
        });
    }
    if (currentPath == "/messages")
    {
        $('#users-list-btn').click(function () {
            $("#center-div").toggle();
            $("#users-list").toggleClass("usr-lst-mbl");
            $('#users-profile-btn').toggle();
        });
        $('#users-profile-btn').click(function () {
            $("#center-div").toggle();
            $("#users-list-btn").toggle();
            $("#user-profile").toggleClass("usr-prof-mbl");
            $("#user-profile").toggle();
            $("#slider").toggle();
        });
    }
});
