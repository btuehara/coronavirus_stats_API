const request = require('request');

const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  qs: { country: 'usa' },
  headers: {
    'X-RapidAPI-Key': 'a4d48cda87msh8072e68161222a9p1675e8jsnb3df610a2b47',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  // Parse the JSON response
  const data = JSON.parse(body);

  // Check if data is available
  if (data.response) {
    const statistics = data.response[0];

    // by making API requests to retrive coronavirus stats, this code prints the data in via console output if the response from the server contains the data requested. If the response does nto contain the data requested, the code will print an error message
    console.log('COVID-19 Statistics for USA:');
    console.log('-----------------------------');
    console.log('Total Cases:', statistics.cases.total);
    console.log('New Cases:', statistics.cases.new);
    console.log('Total Deaths:', statistics.deaths.total);
    console.log('New Deaths:', statistics.deaths.new);
    console.log('Total Recovered:', statistics.cases.recovered);
    console.log('Date:', statistics.day);
  } else {
    console.log('No data available for the specified country.');
  }
});
