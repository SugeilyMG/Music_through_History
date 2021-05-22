// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var year = d3.select("#searchInput").node().value;
    console.log(year);
  
    // clear the input value
    // d3.select("#searchInput").node().value = "";
  

    // buildPlot(year);

    const url = `/data/${year}`
    //const url = `http://127.0.0.1:5000/data/year=${year}`
    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
    console.log(data);
    });

  }


d3.select("#submit").on("click", handleSubmit);
  

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
  
    //});
  
  
  // Add event listener for submit button