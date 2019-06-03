const submit = d3.select("#filter-btn");
dataSet = [injuries_2009, injuries_2010, injuries_2011, injuries_2012, injuries_2013, injuries_2014, injuries_2015, injuries_2016, injuries_2017, injuries_2018];
let adjValue = 9;

Highcharts.SparkLine = function (a, b, c) {
  var hasRenderToArg = typeof a === 'string' || a.nodeName,
    options = arguments[hasRenderToArg ? 1 : 0],
    defaultOptions = {
      chart: {
        renderTo: (options.chart && options.chart.renderTo) || this,
        backgroundColor: null,
        borderWidth: 0,
        type: 'area',
        margin: [2, 0, 2, 0],
        width: 200,
        height: 20,
        style: {
          overflow: 'visible'
        },

        // small optimalization, saves 1-2 ms each sparkline
        skipClone: true
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: []
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        tickPositions: [0]
      },
      legend: {
        enabled: false
      },
      tooltip: {
        hideDelay: 0,
        outside: true,
        shared: true
      },
      plotOptions: {
        series: {
          animation: false,
          lineWidth: 1,
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          marker: {
            radius: 1,
            states: {
              hover: {
                radius: 2
              }
            }
          },
          fillOpacity: 0.25
        },
        column: {
          negativeColor: '#910000',
          borderColor: 'silver'
        }
      }
    };

  options = Highcharts.merge(defaultOptions, options);

  return hasRenderToArg ?
    new Highcharts.Chart(a, options, c) :
    new Highcharts.Chart(options, b);
};

var start = +new Date(),
  $tds = $('td[data-sparkline]'),
  fullLen = $tds.length,
  n = 0;

// Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
// can take some seconds, so we split the input into chunks and apply them in timeouts
// in order avoid locking up the browser process and allow interaction.
function doChunk(adjValue) {
  adjValue = typeof adjValue !== 'undefined' ? adjValue : 0;
// const seasonData = dataSet[adjValue];

  var time = +new Date(),
    i,
    len = $tds.length,
    $td,
    stringdata,
    arr,
    data,
    chart;

  for (i = 0; i < len; i += 1) {
    $td = $($tds[i]);
    stringdata = $td.data('sparkline');
    arr = stringdata.split('; ');
    data = dataSet[adjValue][i].did_not_play;
    // data = $.map(arr[0].split(', '), parseFloat);
    chart = {};

    if (arr[1]) {
      chart.type = arr[1];
    }
    $td.highcharts('SparkLine', {
      series: [{
        data: data,
        pointStart: 1
      }],
      tooltip: {
        headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', Week {point.x}:</span><br/>',
        pointFormat: '<b>{point.y}</b> Injuries'
      },
      chart: chart
    });

    n += 1;

    // If the process takes too much time, run a timeout to allow interaction with the browser
    if (new Date() - time > 500) {
      $tds.splice(0, i + 1);
      setTimeout(doChunk, 0);
      break;
    }

    // Print a feedback on the performance
    if (n === fullLen) {
      $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
    }
  }
}
doChunk();


function init() {

    // Grab a reference to the dropdown select element
    const seasonSelector = d3.select("#selSeason");
    //Use the list of sample names to populate the select options
  
    d3.json("/teamstat/metadata").then(function (response) {
      seasons = [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009]
      seasons.forEach((season) => {
        seasonSelector
          .append("option")
          .text(season)
          .property("value", season);
      });
    });
  
  }

function optionChangedSeason(season) {
  // Fetch new data each time a new sample is selected
  adjValue = season - 2009;
  doChunk(adjValue);

}
init();

