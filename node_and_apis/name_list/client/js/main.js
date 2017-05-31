'use strict';

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        var dataForServer = $(this).serialize();


        $.ajax({
            url: '/submit',
            method: 'post',
            data: dataForServer,
            success: function(responseFromServer) {
                // console.log(responseFromServer);
                $('.replace-content').append(responseFromServer);
            }

        })

        $('.replace-content').on('click', 'trash', function() {
            const dataToDelete = $(this);
            console.log(dataToDelete);
            // $.delete('/delete', function() {})


            $.ajax({
                url: '/delete',
                method: 'DELETE',
                data: dataToDelete,
                success: function(responseFromServer) {

                }
            })

        })
    })
})