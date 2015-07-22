$(document).ready(function(){
    $(window).load(function(){ data();
    });
});
//  function to get data from json
function data () {

    //tomnod url
    var tnAPI = "https://s3.amazonaws.com/intern-coding-challenge/counts.json";

    //calling ajax to place  json data
    jQuery.ajax({
        url: tnAPI,
        dataType: "json"
    })

        //turn data groups (tags and clusters in variables
        .done(function (data) {
            var tags = (data.tags);
            //var clusters = (data.clusters);

            // html  div elements just to get data on html...

            //   "Name"
            //swimming pool
            $("#tags").append("<h2>" + tags[0].name + "</h2>");

            //counts
            $("#tags").append("<p>" +  "tags: " + tags[0].count  + "</p>");
            //$("#tags").append("<div>" + tags[0].icon_url + "</div>");


            //tennis court
            $("#tags1").append("<h2>" + tags[1].name + "</h2>");

            //counts
            $("#tags1").append("<p>" + "tags: " + tags[1].count  +  "</p>");
            //$("#tags").append("<div>" + tags[1].icon_url + "</div>");
            //
            //soccer field
            $("#tags2").append("<h2>" + tags[2].name + "</h2>");

            //count
            $("#tags2").append("<p>" + "tags: " + tags[2].count   + "</p>");
            //$("#tags").append("<div>" + tags[2].icon_url + "</div>");

        })
}
/**
 //{
  "name": "TomNod API",
  "version": "0.0.1"


"tags": [
{
"type_id": "118",
"name": "Swimming Pool",
"color": "15ff00",
"icon_url": "/nod/images/icons/people_drowned_60px.png",
"count": 2601
},
{
"type_id": "248",
"name": "Tennis Court",
"color": "ff00e1",
"icon_url": "/nod/images/icons/svg/sport_tennisball.svg",
"count": 326
},
{
"type_id": "252",
"name": "Soccer Field",
"color": "0099ff",
"icon_url": "/nod/images/icons/svg/sport_soccer_ball.svg",
"count": 728
}
],
"clusters": [
{
"type_id": "118",
"name": "Swimming Pool",
"color": "15ff00",
"icon_url": "/nod/images/icons/people_drowned_60px.png",
"count": 652
},
{
"type_id": "248",
"name": "Tennis Court",
"color": "ff00e1",
"icon_url": "/nod/images/icons/svg/sport_tennisball.svg",
"count": 31
},
{
"type_id": "252",
"name": "Soccer Field",
"color": "0099ff",
"icon_url": "/nod/images/icons/svg/sport_soccer_ball.svg",
"count": 97
}
],
"total_tags": 3655,
"total_clusters": 780,
"total_maps": 22057,
"total_area": 3962.6420033322,
"views": 138420,
"taggers": 377,
"recent_taggers": "0",
"recent_time": 5,
"status": 1,
"msg": "Counted 0 taggers in last 5 minutes"
}
 * Created by AaronG on 7/19/2015.
 */

(function() {

    function init() {
        var speed = 250,
            easing = mina.easeinout;

        [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
            var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                pathConfig = {
                    from : path.attr( 'd' ),
                    to : el.getAttribute( 'data-path-hover' )
                };

            el.addEventListener( 'mouseenter', function() {
                path.animate( { 'path' : pathConfig.to }, speed, easing );
            } );

            el.addEventListener( 'mouseleave', function() {
                path.animate( { 'path' : pathConfig.from }, speed, easing );
            } );
        } );
    }

    init();

})();
