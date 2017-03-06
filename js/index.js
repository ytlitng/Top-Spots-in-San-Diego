$(document).ready(function() {

  $.getJSON('topSpots.json', function(topSpots) {

    for (var i = 0; i < topSpots.length; i++) {
        $('#topSpotsTable').append(
          '<tr>' +
          '<td>' + topSpots[i].name + '</td>' +
          '<td>' + topSpots[i].description + '</td>' +
          '<td>' + topSpots[i].location[0] + '</td>' +
          '</tr>'
        );

    }
console.log(topSpots);
  });


});
