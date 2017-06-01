'use strict';

//stop the form from being submitted
$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // this line says the stop the event that you kicked off when clicking submit
        const dataForServer = $(this).serialize(); //this line says assign variable dataForSever to what you clicked on aka submit and serialize or collect the data in a string.
        $.ajax({
            url: '/result',
            method: 'post',
            data: dataForServer,
            success: function(responseFromServer) {

                $('.main-content').html(responseFromServer);
            }
        })
    })
})