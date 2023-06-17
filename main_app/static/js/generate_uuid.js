$(document).ready(function() {
    var generateUuidButton = $('<input type="button" value="Generate Book Id" class="button" style="margin-top:10px; background-color:#22b24c; color:#fff;">');
    generateUuidButton.on('click', function() {
        $.ajax({
            url: '/generate_uuid/',
            type: 'POST',
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-CSRFToken", $("[name=csrfmiddlewaretoken]").val());
            },
            success: function(data) {
                $('#id_book_id').val('');
                $('#id_book_id').val(data.uuid);
            }
        });
    });
    $('#id_book_id').after(generateUuidButton);
});
