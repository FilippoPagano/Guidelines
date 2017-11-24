$(document).ready(function () {
    $.ajaxSetup({
        type: "POST",
        data: {},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    });
    if (window.location.href.endsWith("login.html") && (localStorage.getItem('email') + localStorage.getItem('password')).length > 0) {

        login(localStorage.getItem('email').replace(/^"(.+(?="$))"$/, '$1'), localStorage.getItem('password').replace(/^"(.+(?="$))"$/, '$1'));
    }
    $("#loginBtn").click(function (event) {

        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var email = $('#username').val().toLowerCase();
        var password = $('#password').val();

        login(email, password);

    });

});

function login(email, password) {
    // Send the data using post
    var posting = $.post('../../php/login.php', {
        email: email,
        password: password
    });

    // Put the results in a div
    posting.done(function (data, textStatus, XMLHttpRequest) {
        if (data[0] === "ok") {
            saveAuthentication(email, password);
            document.cookie = 'PHPSESSID=' + data[1];
            window.location.replace("guidelines.html");
        } else {

            loginError();
        };
    });
	posting.fail(function(xhr, status, error) {
		if (xhr.readyState == 0) {
            saveAuthentication(email, password);
            document.cookie = 'PHPSESSID=' + 'aaa';
            backToMainLogin();
        }
	})

}

function loginError() {
    localStorage.clear();
}

function logout() {

    localStorage.clear();
    // Send the data using post

    $.post('../../php/logout.php').done(function (data, textStatus, XMLHttpRequest) {
            window.location.replace("login.html");
        })
        .fail(function (XMLHttpRequest, textStatus, errorThrown) {
            log("Status: " + textStatus);
            log("Error: " + errorThrown);
        })
        .always(function () {

        });


}


function saveAuthentication(email, password) {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
}

// Prevent the backspace key from navigating back.
$(document).unbind('keydown').bind('keydown', function (event) {
    var doPrevent = false;
    if (event.keyCode === 8 && $("#Login")[0] ) {
        var d = event.srcElement || event.target;
        if ((d.tagName.toUpperCase() === 'INPUT' &&
                (
                    d.type.toUpperCase() === 'TEXT' ||
                    d.type.toUpperCase() === 'PASSWORD' ||
                    d.type.toUpperCase() === 'FILE' ||
                    d.type.toUpperCase() === 'SEARCH' ||
                    d.type.toUpperCase() === 'EMAIL' ||
                    d.type.toUpperCase() === 'NUMBER' ||
                    d.type.toUpperCase() === 'DATE')
            ) ||
            d.tagName.toUpperCase() === 'TEXTAREA') {
            doPrevent = d.readOnly || d.disabled;
        } else {
            doPrevent = true;
        }
    }

    if (doPrevent) {
        event.preventDefault();
        backToMainLogin();
    }

});

document.addEventListener("backbutton", function () {
    backToMainLogin();
}, false);

function backToMainLogin() {
    window.location.replace("login.html");

}