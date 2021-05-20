// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var year = d3.select("#searchInput").node().value;
    console.log(stock);
  
    // clear the input value
    d3.select("#searchInput").node().value = "";
  
    // Build the plot with the new stock
    buildPlot(year);
  }
  
  function buildPlot(year) {
    
    var request = require('request'); // "Request" library

    var client_id = 'f6199291e44c4ab8b55e24ae9973c235'; // Your client id
    var client_secret = '263dd6a315534fdf9aa53942bb817ec8'; // Your secret

    // your application requests authorization
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
        };

        request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {

            // use the access token to access the Spotify Web API
            var token = body.access_token;
            var options = {
            url: 'https://api.spotify.com/v1/search?query=year:${year}',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            json: true
            };
            request.get(options, function(error, response, body) {
            console.log(body);
            });
        }
            });

    // d3.json(url).then(function(data) {
    //   // Grab values from the response json object to build the plots
    //   var name = data.dataset.name;
    //   var stock = data.dataset.dataset_code;
    //   var startDate = data.dataset.start_date;
    //   var endDate = data.dataset.end_date;
    //   // Print the names of the columns
    //   console.log(data.dataset.column_names);
    //   // Print the data for each day
    //   console.log(data.dataset.data);
    //   var dates = data.dataset.data.map(row => row[0]);
    //   // console.log(dates);
    //   var closingPrices = data.dataset.data.map(row => row[4]);
    //   // console.log(closingPrices);
  
    //   var trace1 = {
    //     type: "scatter",
    //     mode: "lines",
    //     name: name,
    //     x: dates,
    //     y: closingPrices,
    //     line: {
    //       color: "#17BECF"
    //     }
    //   };
  
    //   var data = [trace1];
  
    //   var layout = {
    //     title: `${stock} closing prices`,
    //     xaxis: {
    //       range: [startDate, endDate],
    //       type: "date"
    //     },
    //     yaxis: {
    //       autorange: true,
    //       type: "linear"
    //     }
    //   };
  
    //   Plotly.newPlot("plot", data, layout);
  
    });
  }
  
  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
  
      
