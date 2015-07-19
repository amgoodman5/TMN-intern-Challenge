$(document).ready(function() {


    $('button').click(function () {

        $("button").removeClass("selected");
        $(this).addClass("selected");

        //url
        var tnAPI = "https://s3.amazonaws.com/intern-coding-challenge/counts.json";
        $(this).append();{

        }
        function displayIcon(data) {

            //tn is TomNod

            var tnHTML = '<ul>';
            $.each(data,function(tags) {
                //thumbnail grid
                tnHTML += '<li class="grid-25 tablet-grid-50">';
                tnHTML += '<a href="' + tags.icon_url + '" class="image">';
                tnHTML += '<img src="' + tags + '"></a></li>';
            }); // end each
            tnHTML += '</ul>';
            $('#icons').html(tnHTML);
        }
        $.getJSON(tnAPI, displayIcon);






    }); // end click

}); // end ready
