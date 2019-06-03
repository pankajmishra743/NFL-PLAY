//Scope Related yLabel so this is at the Root Level.
let yTextValue = "";
function getTeamStatName(teamCriteriaName) {
  d3.json("/teamstat/metadata").then(function (response) {
    metadata = response.measures
    //
    for (const [k, v] of Object.entries(metadata)) {
      if (teamCriteriaName === k) {
        yTextValue = v;
        break;
      }
    }
  });
}

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 60
},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom,
svg = d3.select("#chart-interactive-bars")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom),
//For the Main Bar Chart  
g = svg.append("g")
  .attr("transform", "translate(" + margin.left+","+margin.top +")");

const x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1);

const y = d3.scaleLinear()
  .rangeRound([height, 0]);

// Define the div for the tooltip
let div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

//INITIALIZE x/y axis    
//Y - axis (Todo Fix the width alignment)  
yAxis = svg.append("g")
  .attr("transform", "translate(" + margin.left+","+margin.top +")");

//Y - Label  
svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", margin.left - 50)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr('class', 'yLabelText')
      .style("font-size", "14px") 
      .style("text-anchor", "middle");

// Add X axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .style("font-size", "14px") 
    .attr("y", height + margin.top + 35)
    .attr('class', 'xLabelText');

//Static Title
svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "14px") 
        .text("NFL Team Stats / Season");

//X-axis - replace the ticks with logo
xAxis = svg.append("g")
  .attr('class', "x tick")
  .attr("transform", "translate("+margin.left +"," + (height + margin.top) + ")");
  
//Build BAR Chart...    
function buildBarChart(response,season,teamStatsCriteria) {
  //
  x.domain(response.map(function (d) {
    return d.team;
  }));
  y.domain([0, d3.max(response, function (d) {
    return Number(d[teamStatsCriteria]);
  })]);

  //Calls and Render x/y Axis
  yAxis.call(d3.axisLeft(y));
  xAxis.call(d3.axisBottom(x));
  svg.selectAll(".x .tick").each( function(d) {
    var p = d3.select(this);
    p.append("svg:image")
    .attr("x", -9)
    .attr("y", 3)
    .attr("dy", ".35em")
    .attr("width", 18)
    .attr("height", 18)
    .attr("xlink:href","../static/logos/"+d+".gif");
  });
  svg.select('.yLabelText').text(yTextValue);
  svg.select('.xLabelText').text(season + " NFL Teams");
  //Render BARS
  //Takes Care of Rebinding new response JSON object.  
  let bars = g.selectAll(".bar")
    .remove()
    .exit()
    .data(response);
  //now actually give each rectangle the corresponding data
  bars.enter().append("rect")
    .attr("class", "bar")
    .attr("x", function (d) {
      return x(d.team);
    })
    .attr("y", function (d) {
      return y(Number(d[teamStatsCriteria]));
    })
    .attr("width", x.bandwidth())
    .attr("height", function (d) {
      return height - y(Number(d[teamStatsCriteria]));
    })
    .on("mouseover", function(d) {		
      div.transition()		
          .duration(200)		
          .style("opacity", .9);		
      div.html(d.team_name +  "<br/>" + yTextValue  + ":" + d[teamStatsCriteria] )	
          .style("left", (d3.event.pageX) + "px")		
          .style("top", (d3.event.pageY - 28) + "px");	
      })					
    .on("mouseout", function(d) {		
      div.transition()		
          .duration(500)		
          .style("opacity", 0);	
    });

}

function buildData(seasonCriteria, teamStatsCriteria, sortCriteria) {
  let url = `/teamstats/${seasonCriteria}`;

  d3.json(url).then(function (response) {

    if (sortCriteria === 'ascending') {
      response.sort(function (x, y) {
        return d3.ascending(x[teamStatsCriteria], y[teamStatsCriteria]);
      })
    } else if (sortCriteria === 'descending') {
      response.sort(function (x, y) {
        return d3.descending(x[teamStatsCriteria], y[teamStatsCriteria]);
      })
    }
    buildBarChart(response,seasonCriteria,teamStatsCriteria);

  });//END Data Mapping.

}

function init() {
  // Grab a reference to the dropdown select element
  const seasonSelector = d3.select("#selSeason");
  const teamStatsSelector = d3.select("#selTeamStatsMetadata");
  //Use the list of sample names to populate the select options

  d3.json("/teamstat/metadata").then(function (response) {
    seasons = response.seasons
    metadata = response.measures
    //
    seasons.forEach((season) => {
      seasonSelector
        .append("option")
        .text(season)
        .property("value", season);
    });
    //
    for (const [k, v] of Object.entries(metadata)) {
      teamStatsSelector
        .append("option")
        .text(v)
        .property("value", k);
    }
    const seasonCriteria = seasons[0]
    const teamStatsCriteria = Object.keys(metadata)[0];
    //Initialize team Stat Name
    getTeamStatName(d3.select("#selTeamStatsMetadata").property("value"))
    //Create the Chart
    buildData(seasonCriteria, teamStatsCriteria)
  });

}

function optionChangedSeason(season) {
  // Fetch new data each time a new sample is selected
  buildData(season, d3.select("#selTeamStatsMetadata").property("value"), 'none');
}
function optionChangedTeamStats(teamStat) {
  //Rebuild the yTextValue
  getTeamStatName(teamStat);
  // Fetch new data each time a new sample is selected
  buildData(d3.select("#selSeason").property("value"), teamStat, 'none');
}

const sortAscendingBar = d3.select("#sort-ascending-btn")
const sortDescendingBar = d3.select("#sort-descending-btn")
const sortResetBar = d3.select("#sort-reset-btn")

sortAscendingBar.on("click", function () {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  buildData(d3.select("#selSeason").property("value"), d3.select("#selTeamStatsMetadata").property("value"), 'ascending');
})
sortDescendingBar.on("click", function () {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  buildData(d3.select("#selSeason").property("value"), d3.select("#selTeamStatsMetadata").property("value"), 'descending');
})
sortResetBar.on("click", function () {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  buildData(d3.select("#selSeason").property("value"), d3.select("#selTeamStatsMetadata").property("value"), 'none');
})
init();