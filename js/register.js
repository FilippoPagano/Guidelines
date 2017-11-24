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
    $("#regBtn").click(function (event) {

        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this);
        var email = $('#email').val();
        var password = $('#password').val();
        var name = $('#username').val();

        // Send the data using post
        var posting = $.post('../../php/register.php', {
            email: email,
            password: password,
            name: name
        });

        // Put the results in a div
        posting.done(function (data, textStatus, XMLHttpRequest) {
            if (data[0] === "ok") {
                document.cookie = 'PHPSESSID=' + data[1];
                window.location.replace("guidelines.html");
            } else {


            };
        });
    });





});