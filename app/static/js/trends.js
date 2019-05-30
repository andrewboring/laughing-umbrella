// Chart Params
var svgWidth = 960;
var svgHeight = 600;


var margin = { top: 20, right: 40, bottom: 120, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("#content")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // gridlines in x axis function
//function make_x_gridlines() { return d3.axisBottom(x)
//  .ticks(5)
//}
  // gridlines in y axis function
//function make_y_gridlines() { return d3.axisLeft(y)
//  .ticks(5)
//}

// Import data from an external CSV file
d3.csv("/historical-data.csv", function(error, hdata) {
  if (error) throw error;

  console.log(hdata);

  // Create a function to parse date and time
  var parseTime = d3.timeParse("%Y-%m-%d");

  // Format the data
  hdata.forEach(function(data) {
    data.period = parseTime(data.period);
    data.CS_Index = +data.CS_Index;
    data['Unemployment Rate'] = +data['Unemployment Rate'];
    data['USA'] = +data['USA'];
    data['Housing Affordability index'] = +data['Housing Affordability Index'];
    data['Market Absorption Rate (%)'] = +data['Market Absorption Rate (%)'];
    data['Financial obligations ratio'] = +data['Financial obligations ratio'];
  });

  // Create scaling functions
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(hdata, d => d.period))
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(hdata, d => d.USA)])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([0, d3.max(hdata, d => d['Unemployment Rate'])])
    .range([height, 0]);

  var yLinearScale3 = d3.scalePow()
    .domain([0, d3.max(hdata, d => d['Financial obligations ratio'])])
    .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xTimeScale)
    .tickFormat(d3.timeFormat("%b-%Y"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Add x-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // Add y1-axis to the left side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("white", true)
    .call(leftAxis);

  // Add y2-axis to the right side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("white", true)
    .attr("transform", `translate(${width}, 0)`)
    .call(rightAxis);

  // Line generators for each line
  var line1 = d3.line()
    .x(d => xTimeScale(d.period))
    .y(d => yLinearScale1(d.CS_Index));

  var line2 = d3.line()
    .x(d => xTimeScale(d.period))
    .y(d => yLinearScale2(d['Unemployment Rate']));

  var line3 = d3.line()
    .x(d => xTimeScale(d.period))
    .y(d => yLinearScale1(d['USA']));

  var line4 = d3.line()
    .x(d => xTimeScale(d.period))
    .y(d => yLinearScale1(d['Housing Affordability Index']));

  var line5 = d3.line()
    .x(d => xTimeScale(d.period))
    .y(d => yLinearScale1(d['Market Absorption Rate (%)']));

  var line6 = d3.line()
    .x(d => xTimeScale(d.period))
    .y(d => yLinearScale3(d['Financial obligations ratio']));


// set up grid lines
// add the X gridlines
//  chartGroup.append("g")
//    .attr("class", "grid")
//    .attr("transform", "translate(0," + height + ")")
//    .call(make_x_gridlines()
//        .tickSize(-height)
//        .tickFormat("")
//    )
//    // add the Y gridlines
//  chartGroup.append("g")
//    .attr("class", "grid")
//    .call(make_y_gridlines()
//        .tickSize(-width)
//        .tickFormat("")
//    )


  // Append a path for line1


  chartGroup.append("path")
    .data([hdata])
    .attr("d", line1)
    .attr("fill","none")
    .attr("stroke","green")
    .classed("line green", true);

  // Append a path for line2

  chartGroup.append("path")
    .data([hdata])
      .attr("d", line2)
      .attr("fill","none")
      .attr("stroke","blue")
    .classed("line blue", true);

 //line3
  chartGroup.append("path")
    .data([hdata])
    .attr("d", line3)
    .attr("fill","none")
    .attr("stroke","red")
    .classed("line red", true);
//line 4
  chartGroup.append("path")
    .data([hdata])
    .attr("d", line4)
    .attr("fill","none")
    .attr("stroke","purple")
    .classed("line purple", true);

//line 5
  chartGroup.append("path")
    .data([hdata])
    .attr("d", line5)
    .attr("fill","none")
    .attr("stroke","orange")
    .classed("line orange", true);

  chartGroup.append("path")
    .data([hdata])
    .attr("d", line6)
    .attr("fill","none")
    .attr("stroke","DarkSlateBlue")
    .classed("line DarkSlateBlue", true);

  // Append axes titles
  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
    .classed("text", true)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "green")
    .text("Case-Schiller Index");

  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 35})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "blue")
    .classed("text", true)
    .text("Unemployment Rate");

  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 50})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "red")
    .text("Unemployment Rate");

  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 65})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "purple")
    .text("Housing Affordability Index");

  chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 80})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "orange")
    .text("Market Absorption Rate (%)");

  chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 95})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "DarkSlateBlue")
    .text("Financial Obligations Ratio");
});
