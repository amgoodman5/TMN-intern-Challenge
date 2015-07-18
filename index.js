$(document).ready(function() {


    $('button').click(function () {

        $("button").removeClass("selected");
        $(this).addClass("selected");


        var tnAPI = "https://s3.amazonaws.com/intern-coding-challenge/counts.json";
        var icons = $(this).text();

        function displayIcon(data) {
            //tn is TomNod
            var tnHTML = '<ul>';
            $.each(data.tags,function(i,tags) {


                tnHTML += '<li class="grid-25 tablet-grid-50">';
                tnHTML += '<a href="' + tags.icon_url.name + '" class="image">';

                tnHTML += '<img src="' + tags.icon_url.name + '"></a></li>';
            }); // end each
            tnHTML += '</ul>';
            $('#icons').html(tnHTML);
        }
        $.getJSON(tnAPI, null, displayIcon);

    }); // end click

}); // end ready
