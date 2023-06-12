console.log('hello');



fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={8786096495ea01934e61f3b183f55c15}')
  .then(res => console.log(res))
