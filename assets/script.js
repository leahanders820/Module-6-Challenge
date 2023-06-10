console.log('hello');


var requestUrl = ('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}')

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        console.log(response); }
      
      )}
