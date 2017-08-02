// entire code is a function
$(function() {
  console.log('script.js loaded!')

  // function for getting the weather data
  let getWeather = function() {
    console.log('getting data....')
    console.log(`ZIP Code is ${zip.value}`);

    // worked with Jason on proper http address format to pull the data
    $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?zip=${zip.value},us&units=imperial&appid=a9c64fee4f3d63e1bc3db68be4803ec6`,
    method: 'GET',
    success: function(data){
      console.log(data);
      getData(data);
      }
    })
  }

  // worked with Phil to get the getData function to work
  function getData(data) {
    let place = data.name;
      console.log(place);
    let temp = data.main.temp;
      console.log(temp);
    let sky = data.weather[0].description;
      console.log(sky);
    let min = data.main.temp_min;
      console.log(min);
    let max = data.main.temp_max;
      console.log(max);

    // change background color if temp is cold (under 50) or hot (over 80)
    if (temp < 50) {
      document.body.style.backgroundColor = '#5D71E8';
      document.getElementById('comment').innerHTML = "It is cold!";
    } else if (temp > 80) {
      document.body.style.backgroundColor = '#E85B69';
      document.getElementById('comment').innerHTML = "It is hot!";
    } else {
      document.getElementById('comment').innerHTML = "It is comfortable.";
      document.body.style.backgroundColor = '#B4FFC1';
    };

    // manipulating DOM to add the data
    document.getElementById('place').innerHTML = `${place}`;

    // I got code for degrees symbol here: https://www.w3schools.com/charsets/tryit.asp?deci=8457
    document.getElementById('temp').innerHTML = `${temp} &#8457`;

    document.getElementById('sky').innerHTML = `Description: ${sky}`;
    document.getElementById('min').innerHTML = `Min: ${min} &#8457`;
    document.getElementById('max').innerHTML = `Max: ${max} &#8457`;
  }


  // adding event listener to button when clicked
  $('button').click(function(){
    getWeather();
  })

})
