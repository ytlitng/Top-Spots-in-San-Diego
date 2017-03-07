$(document).ready(function() {

  $.getJSON('topSpots.json', function(topSpots) {

    for (var i = 0; i < topSpots.length; i++) {
        $('#topSpotsTable').append(
          '<tr>' +
          '<td>' + topSpots[i].name + '</td>' +
          '<td>' + topSpots[i].description + '</td>' +
          '<td> <a href= "https://www.google.com/maps?q="' + topSpots[i].location + '>Search</a></td>' +
          '</tr>'
        );

    }
console.log(topSpots);
  });


});
