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
    var artists = [];
    var popularity = [];
    var songs = [];
    var items = data.tracks.items;
    var artistjson = [];
    var tracksIds = [];

    console.log(items);

    items.forEach((element) => {
      songs.push(element.name)
      artists.push(element.artists[0].name)
      tracksIds.push(element.id)
      popularity.push(element.popularity)
    });
      console.log(artists);
      console.log(songs);
      console.log(popularity);
      console.log(artistjson);
      console.log(tracksIds);

      var trace1 = {
        x: songs,
        y: popularity,     
        marker: {color: 'rgb(49,130,189)'},
        type: 'bar',
      };

      var data = [trace1];

      var layout = {
          title: "Most Popular Songs",
          xaxis: { title: "Songs" },
          yaxis: { title: "Popularity" },
        };

      Plotly.newPlot("plot1", data, layout);
    
    var trace2 = {
      x: artists,
      y: popularity,     
      marker: {color: 'rgb(204,204,204)'},
      type: 'bar',
    };
    var data = [trace2];

    var layout = {
        title: "Most Popular Artists",
        xaxis: { title: "Songs" },
        yaxis: { title: "Popularity" },
      };

    Plotly.newPlot("plot2", data, layout);

    });
  };

d3.select("#submit").on("click", handleSubmit);