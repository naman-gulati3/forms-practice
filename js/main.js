$(document).ready(function () {
    $('button').click(function (e) {


        var value = $('#numb').val();
        var regEx = /^[0-9]+$/;

        if (value.match(regEx)) {
            $('#result').val(true);
            e.preventDefault();
        } else {
            e.preventDefault();
            $('#result').val(false);

        }
    });
});