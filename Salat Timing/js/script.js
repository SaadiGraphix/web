$(document).ready(function(){
  $('#search_btn').click(function() {
    var search = $('#search_bar').val();
    console.time('SaadiGFX'); // to check runtime
    // funtion to check postion's lat & lon
    function postion() {
      var postion_api_source = 'https://api.opencagedata.com/geocode/v1/json?q=';
      var postion_api_key = '&key=68b67961780e4a819378e1e9299ffd5e';
      var postion_url = postion_api_source + search + postion_api_key;
      $.getJSON(postion_url, function(postionData){
        postionUpdate(postionData)
      });
    }

    postion();

    function postionUpdate (postionData){
      var lat = postionData.results[0].geometry.lat;
      var lon = postionData.results[0].geometry.lng;
      console.log(lat);
      console.log(lon);
      timing(lat,lon);
    }

    // funtion to check timing using lon & lat
    function timing(lat,lon) {
      var api_source = 'https://api.aladhan.com/v1/calendar?';
      var api_lat = 'latitude=';
      var api_lon = '&longitude=';
      var qurey = '/monthly/26-04-2019.json';
      var rem = '&method=1&month=4&year=2019';
      var url = api_source + api_lat + lat + api_lon + lon + rem;
      $.getJSON(url,function(timingData){
        console.log(timingData);
        update(timingData);
      });
    }

    // funtion to update data on page
    function update(timingData) {
      var seher01 = timingData.data[25].timings.Fajr;
      var iftar01 = timingData.data[25].timings.Maghrib;
      var date01 = timingData.data[25].date.gregorian.date;
      var day01 = timingData.data[25].date.gregorian.weekday.en;
      var r01 = timingData.data[25].date.gregorian.day;
      $('#r01').html(r01);
      $('#r01s').html(seher01);
      $('#r01i').html(iftar01);
      $('#r01d').html(date01);
      $('#r01day').html(day01);


      var seher02 = timingData.data[26].timings.Fajr;
      var iftar02 = timingData.data[26].timings.Maghrib;
      var date02 = timingData.data[26].date.gregorian.date;
      var day02 = timingData.data[26].date.gregorian.weekday.en;
      var r01 = timingData.data[26].date.gregorian.day;
      $('#r02').html(r01);
      $('#r02s').html(seher02);
      $('#r02i').html(iftar02);
      $('#r02d').html(date02);
      $('#r02day').html(day02);

      var seher03 = timingData.data[27].timings.Fajr;
      var iftar03 = timingData.data[27].timings.Maghrib;
      var date03 = timingData.data[27].date.gregorian.date;
      var day03 = timingData.data[27].date.gregorian.weekday.en;
      var r01 = timingData.data[27].date.gregorian.day;
      $('#r03').html(r01);
      $('#r03s').html(seher03);
      $('#r03i').html(iftar03);
      $('#r03d').html(date03);
      $('#r03day').html(day03);

      var seher04 = timingData.data[28].timings.Fajr;
      var iftar04 = timingData.data[28].timings.Maghrib;
      var date04 = timingData.data[28].date.gregorian.date;
      var day04 = timingData.data[28].date.gregorian.weekday.en;
      var r01 = timingData.data[28].date.gregorian.day;
      $('#r04').html(r01);
      $('#r04s').html(seher04);
      $('#r04i').html(iftar04);
      $('#r04d').html(date04);
      $('#r04day').html(day04);

      var seher05 = timingData.data[29].timings.Fajr;
      var iftar05 = timingData.data[29].timings.Maghrib;
      var date05 = timingData.data[29].date.gregorian.date;
      var day05 = timingData.data[29].date.gregorian.weekday.en;
      var r01 = timingData.data[29].date.gregorian.day;
      $('#r05').html(r01);
      $('#r05s').html(seher04);
      $('#r05i').html(iftar04);
      $('#r05d').html(date04);
      $('#r05day').html(day04);
    }
    console.timeEnd('SaadiGFX'); // to check runtime
  });
});
