$(document).ready(function () {
    $('#login-button').click(function () {

        $('#email-error').text('');
        $('#password-error').text('');

        var email = $('#index-email').val();
        var password = $('#index-password').val();
        console.log(email, password)

        if (email != '' && password != '') {
            $.ajax({
                url: '/login-user/',
                method: "POST",
                dataType: "json",
                data: {
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    email: email,
                    password: password
                },
                success: function (data) {


                    if (data.status == 404) {
                        html = '<div class="flash-message-inner">' + '<span class="msg-close">' + ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>' +
                            '</span>' + '<img class="flash-img" src="/static/img/cross.png">' + '<div class="flash-text">' +
                            '<h6>' + 'Error' + '</h6>' + '<p>' + data.message + '</p>' + '</div>' + '</div>'
                        $('.comman-error-message').empty();
                        $('.comman-error-message').append(html);
                        $('#si-flash-message').trigger('click');


                    } else {
                        html = '<div class="flash-message-inner">' + '<span class="msg-close">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>' +
                            '</span>' + '<img class="flash-img" src="/static/img/right.png">' + '<div class="flash-text">' + '<h6>Success</h6>' + '<p>' + data.message + '</p>' + '</div></div>'
                        $('#index-email').val('');
                        $('#index-password').val('');
                        $('.comman-sucses-message').empty();
                        $('.comman-sucses-message').append(html);
                        $('#si-flash-message').trigger('click');

                        $('#login-link').empty();
                        var html = '<a id="login-link" href="mailto:' + email + '" title="' + email + '">' +
                            '<img src="/static/img/gmail.png" alt="">' +
                            '<span>' + email + '</span></a>';
                        $('#login-link').append(html);
                    }


                }
            })
        }
        else {
            if (email == '') {
                $('#email-error').removeClass('d-none');
                $('#email-error').text('Please Enter Email');
            }
            if (password == '') {
                $('#password-error').removeClass('d-none');
                $('#password-error').text('Please Enter Password');
            }
        }
    })
})



// signup popup js 


$(document).ready(function () {
    $('#si-login-button').click(function () {

        $('#si-email-error').text('');
        $('#si-password-error').text('');
        $('#si-cnf-password-error').text('');
        $('.comman-error-message').empty();
        $('.comman-sucses-message').empty();

        var email = $('#si-index-email').val();
        var password = $('#si-index-password').val();
        var confirm_password = $('#si-cnf-password').val();

        if (email != '' && password != '' && confirm_password != '' && password == confirm_password) {
            $.ajax({
                url: '/register/',
                method: "POST",
                dataType: "json",
                data: {
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    email: email,
                    password: password,
                    confirm_password: confirm_password
                },
                success: function (data) {


                    if (data.status == 404) {
                        html = '<div class="flash-message-inner">' + '<span class="msg-close">' + ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>' +
                            '</span>' + '<img class="flash-img" src="/static/img/cross.png">' + '<div class="flash-text">' +
                            '<h6>' + 'Error' + '</h6>' + '<p>' + data.message + '</p>' + '</div>' + '</div>'
                        $('.comman-error-message').empty();
                        $('.comman-error-message').append(html);
                        $('#si-flash-message').trigger('click');


                    } else {
                        html = '<div class="flash-message-inner">' + '<span class="msg-close">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>' +
                            '</span>' + '<img class="flash-img" src="/static/img/right.png">' + '<div class="flash-text">' + '<h6>Success</h6>' + '<p>' + data.message + '</p>' + '</div></div>'
                        $('#si-index-email').val('');
                        $('#si-index-password').val('');
                        $('#si-cnf-password').val('');
                        $('.comman-sucses-message').empty();
                        $('.comman-sucses-message').append(html);
                        $('#si-flash-message').trigger('click');

                        $('#login-link').empty();
                        var html = '<a id="login-link" href="mailto:' + email + '" title="' + email + '">' +
                            '<img src="/static/img/gmail.png" alt="">' +
                            '<span>' + email + '</span></a>';
                        $('#login-link').append(html);

                    }









                }
            })
        }
        else {
            if (email == '') {
                $('#si-email-error').removeClass('d-none');
                $('#si-email-error').text('Please Enter Email');
            }
            if (password == '') {
                $('#si-password-error').removeClass('d-none');
                $('#si-password-error').text('Please Enter Password');
            }
            if (confirm_password == '') {
                $('#si-cnf-password-error').removeClass('d-none');
                $('#si-cnf-password-error').text('Please Confirm The Password');
            }
            if (password != confirm_password) {
                $('#si-password-error').removeClass('d-none');
                $('#si-cnf-password-error').removeClass('d-none');
                $('#si-password-error').text('Password Does Not Matched');
                $('#si-cnf-password-error').text('Password Does Not Matched');
            }
        }
    })
})



// pdf js start 

$(document).ready(function(){
    $('.download-file').click(function(){
        $.ajax({
            url: '/get-file-url/',
            method: "GET",
            dataType: "json",
            data: {
                id:$(this).attr('file-id')
            },
            success: function (data) {
              if(data.msg == 'ok'){
                window.location = data.file_url
              }

            }
        })
    })
})

