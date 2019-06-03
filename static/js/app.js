const
    svgWidth = 800,
    svgHeight = 450;

const margin = {
    top: 20,
    right: 40,
    bottom: 20,
    left: 100
};

var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

d3.select("body").append("svg")
// var slider = new Slider("#ex6");
// slider.on("slide", function(sliderValue) {
//     document.getElementById("ex6SliderVal").textContent = sliderValue;
// });
const svg = d3
  .select("#field_chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

function buildCharts(team, year1, year2) {
  
  d3.json(`/draftpick/${team}/${year1}/${year2}`).then( function(response) {
    buildPlot(response, team, year1, year2);
  });
}



centerx = 390

//////////////////////////////////////////
/////////////Football Field /////////////

var field = svg.append("rect")
            .attr("x", 25)
            .attr("y", 10)
            .attr("width", 800)
            .attr("height", 400)
            .attr("fill", 'green')
            .attr('stroke', 'black')

myline = svg.append('line')
            .attr("x1", centerx)
            .attr("x2", centerx)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");

myline1 = svg.append('line')
            .attr("x1", centerx + 30)
            .attr("x2", centerx + 30)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "yellow")
            .attr('stroke-width', 2)

myline2 = svg.append('line')
            .attr("x1", centerx - 30)
            .attr("x2", centerx - 30)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");

myline3 = svg.append('line')
            .attr("x1", centerx + 30*2)
            .attr("x2", centerx + 30*2)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline4 = svg.append('line')
            .attr("x1", centerx - 30*2)
            .attr("x2", centerx - 30*2)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline5 = svg.append('line')
            .attr("x1", centerx + 30*3)
            .attr("x2", centerx + 30*3)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline6 = svg.append('line')
            .attr("x1", centerx - 30*3)
            .attr("x2", centerx - 30*3)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");

myline7 = svg.append('line')
            .attr("x1", centerx + 30*4)
            .attr("x2", centerx + 30*4)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline8 = svg.append('line')
            .attr("x1", centerx - 30*4)
            .attr("x2", centerx - 30*4)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline9 = svg.append('line')
            .attr("x1", centerx + 30*5)
            .attr("x2", centerx + 30*5)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline10 = svg.append('line')
            .attr("x1", centerx - 30*5)
            .attr("x2", centerx - 30*5)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline11 = svg.append('line')
            .attr("x1", centerx + 30*6)
            .attr("x2", centerx + 30*6)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline12 = svg.append('line')
            .attr("x1", centerx - 30*6)
            .attr("x2", centerx - 30*6)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline13 = svg.append('line')
            .attr("x1", centerx + 30*7)
            .attr("x2", centerx + 30*7)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline14 = svg.append('line')
            .attr("x1", centerx - 30*7)
            .attr("x2", centerx - 30*7)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline15 = svg.append('line')
            .attr("x1", centerx+ 30*8)
            .attr("x2", centerx+ 30*8)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline16 = svg.append('line')
            .attr("x1", centerx- 30*8)
            .attr("x2", centerx- 30*8)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline17 = svg.append('line')
            .attr("x1", centerx+ 30*9)
            .attr("x2", centerx+ 30*9)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline18 = svg.append('line')
            .attr("x1", centerx- 30*9)
            .attr("x2", centerx- 30*9)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline19 = svg.append('line')
            .attr("x1", centerx+ 30*10) 
            .attr("x2", centerx+ 30*10)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
myline20 = svg.append('line')
            .attr("x1", centerx + 30*11)
            .attr("x2", centerx + 30*11)
            .attr("y1", 10)
            .attr("y2", 410)
            .style("stroke", "white");
fieldGoal = svg.append('line')
            .attr("x1", 70)
            .attr("x2", 70)
            .attr("y1", 250)
            .attr("y2", 170) 
            .style("stroke", "yellow")
            .attr('stroke-width', 4);
fieldGoal1 = svg.append('line')
            .attr("x1", 770)
            .attr("x2", 770)
            .attr("y1", 250)
            .attr("y2", 170) 
            .style("stroke", "yellow")
            .attr('stroke-width', 4);

/////////////////////////////////////////////
/////////////////////////////////////////////
////////NUMBERS ON FIELD//////////
fieldnum1 =  svg.append("text")
    .attr("x", centerx +30)//magic number here
    .attr("y", centerx )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")//easy to style with CSS
    .style("fill", "white")
    .text("50");

fieldnum2 =  svg.append("text")
    .attr("x", centerx + 30 *3)
    .attr("y", centerx )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("40");
fieldnum3 =  svg.append("text")
    .attr("x", centerx + 30*5)
    .attr("y", centerx )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("30");
fieldnum4 =  svg.append("text")
    .attr("x", centerx + 30*7)
    .attr("y", centerx )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("20");
fieldnum5 =  svg.append("text")
    .attr("x", centerx + 30*9)
    .attr("y", centerx)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("10");

fieldnum2 =  svg.append("text")
    .attr("x", centerx - 30)
    .attr("y", centerx )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("40");
fieldnum3 =  svg.append("text")
    .attr("x", centerx - 30*3)
    .attr("y", centerx )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("30");
fieldnum4 =  svg.append("text")
    .attr("x", centerx - 30*5)
    .attr("y", centerx)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("20");
fieldnum5 =  svg.append("text")
    .attr("x", centerx - 30*7)
    .attr("y", centerx )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("10");

num1 =  svg.append("text")
    .attr("x", centerx +30)//magic number here
    .attr("y", centerx -345 )
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")//easy to style with CSS
    .style("fill", "white")
    .text("50");

 num1 = svg.append("text")
    .attr("x", centerx + 30 *3)
    .attr("y", centerx - 345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("40");
 num2 = svg.append("text")
    .attr("x", centerx + 30*5)
    .attr("y", centerx - 345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("30");
num3 =  svg.append("text")
    .attr("x", centerx + 30*7)
    .attr("y", centerx - 345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("20");
num4 = svg.append("text")
    .attr("x", centerx + 30*9)
    .attr("y", centerx - 345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("10");

num5 =svg.append("text")
    .attr("x", centerx - 30)
    .attr("y", centerx - 345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("40");
num6 =svg.append("text")
    .attr("x", centerx - 30*3)
    .attr("y", centerx - 345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("30");
num6 =svg.append("text")
    .attr("x", centerx - 30*5)
    .attr("y", centerx - 345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("20");
num7 =  svg.append("text")
    .attr("x", centerx - 30*7)
    .attr("y", centerx -345)
    .attr('text-anchor', 'middle')
    .attr("class", "fieldnumbers")
    .style("fill", "white")
    .text("10");

/////////////////////////////////////////////

function buildPlot(d, team, year1, year2) {

      let cRad = d.season.C
      let cbRad = d.season.CB
      let dbRad = d.season.DB
      let deRad = d.season.DE
      let dlRad = d.season.DL
      let dtRad = d.season.DT
      let fbRad = d.season.FB
      let gRad = d.season.G
      let kRad = d.season.K
      let lbRad = d.season.LB
      let olRad = d.season.OL
      let olbRad = d.season.OLB
      let otRad = d.season.OT
      let pRad = d.season.P
      let qbRad = d.season.QB
      let rbRad = d.season.RB
      let sRad = d.season.S
      let tRad = d.season.T
      let teRad = d.season.TE
      let wrRad = d.season.WR
      let ilbRad = d.season.ILB
    
    cRad = (cRad === undefined) ? 0 : cRad
    cbRad = (cbRad === undefined) ? 0 : cbRad
    dbRad = (dbRad === undefined) ? 0 : dbRad
    deRad = (deRad === undefined) ? 0 : deRad
    dlRad = (dlRad === undefined) ? 0 : dlRad

    dtRad = (dtRad === undefined) ? 0 : dtRad
    fbRad = (fbRad === undefined) ? 0 : fbRad
    gRad = (gRad === undefined) ? 0 : gRad
    kRad = (kRad === undefined) ? 0 : kRad
    lbRad = (lbRad === undefined) ? 0 : lbRad
    olRad = (olRad === undefined) ? 0 : olRad
    otRad = (otRad === undefined) ? 0 : otRad

    olbRad = (olbRad === undefined) ? 0 : olbRad
    pRad = (pRad === undefined) ? 0 : pRad
    qbRad = (qbRad === undefined) ? 0 : qbRad
    rbRad = (rbRad === undefined) ? 0 : rbRad
    sRad = (sRad === undefined) ? 0 : sRad

    tRad = (tRad === undefined) ? 0 : tRad
    teRad = (teRad === undefined) ? 0 : teRad
    tRad = (tRad === undefined) ? 0 : tRad
    wrRad = (wrRad === undefined) ? 0 : wrRad
    ilbRad = (ilbRad === undefined) ? 0 : ilbRad



var thead = d3.select("#draft-table").selectAll("th")
.data(d3.keys(d))
.enter().append("th").text(function(b){return b});
// fill the table
// create rows
var tr = d3.select("tbody").selectAll("tr")
.data(d).enter().append("tr")
//console.log(tr)
// cells
var td = tr.selectAll("td")
  .data(function(b){return d3.values(b)})
  .enter().append("td")
  .text(function(b) {return b})





 let colorAddO = wrRad + tRad + gRad + cRad + teRad + qbRad + fbRad + olRad + otRad + pRad + rbRad
 let colorAddD = dtRad + dlRad + cbRad + lbRad + sRad + dbRad + deRad + ilbRad + olbRad

                                                        

var maxColorD = d3.scaleLinear()
  .range(["#FFFFFF", "#FF0000"])
  .domain([1,colorAddD])


var maxColorO = d3.scaleLinear()
  .range(["#FFFFFF", "#0900FF"])
  .domain([1,colorAddO])


var wr_Circle = svg.append("circle")
    .attr('cx', centerx +85)
    .attr('cy', 340)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(wrRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Wide Reciever(s) " + "<br/>"+ wrRad)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });
var wr_Text =  svg.append("text")
    .attr("x", centerx +85)//magic number here
    .attr("y", 345)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")//easy to style with CSS
    .text("WR")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Wide Reciever(s) " + "<br/>"+ wrRad)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });



var wr_Circle2 = svg.append("circle")
    .attr('cx', centerx +55)
    .attr('cy', 110)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(wrRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Wide Reciever(s) " + "<br/>"+ wrRad)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var wr_Text2 =  svg.append("text")
    .attr("x", centerx +55)//magic number here
    .attr("y", 115)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")//easy to style with CSS
    .text("WR")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Wide Reciever(s) " + "<br/>"+ wrRad)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var t_Circle = svg.append("circle")
    .attr('cx', centerx +55)
    .attr('cy', 150)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(tRad + otRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Tackle(s) " + "<br/>"+ (tRad + otRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });
var t_Text =  svg.append("text")
    .attr("x", centerx +55)//magic number here
    .attr("y", 155)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")//easy to style with CSS
    .text("T")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Tackle(s) " + "<br/>"+ (tRad + otRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var t_Circle2 = svg.append("circle")
    .attr('cx', centerx +55)
    .attr('cy', 270)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(tRad + otRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Tackle(s) " + "<br/>"+ (tRad + otRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var t_Text2 =  svg.append("text")
    .attr("x", centerx +55)//magic number here
    .attr("y", 275)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")//easy to style with CSS
    .text("T")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Tackle(s) " + "<br/>"+ (tRad + otRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var g_Circle = svg.append("circle")
    .attr('cx', centerx +55)
    .attr('cy', 240)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(gRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Guard(s) " + "<br/>"+ (gRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var g_Text =  svg.append("text")
    .attr("x", centerx +55)
    .attr("y", 245)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("G")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Guard(s) " + "<br/>"+ (gRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var g_Circle2 = svg.append("circle")
    .attr('cx', centerx +55)
    .attr('cy', 180)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(gRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Guard(s) " + "<br/>"+ (gRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var g_Text2 =  svg.append("text")
    .attr("x", centerx +55)//magic number here
    .attr("y", 185)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")//easy to style with CSS
    .text("G")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Guard(s) " + "<br/>"+ (gRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var c_Circle = svg.append("circle")
    .attr('cx', centerx +55)
    .attr('cy', 210)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(cRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Center(s) " + "<br/>"+ (cRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var c_Text =  svg.append("text")
    .attr("x", centerx +55)//magic number here
    .attr("y", 215)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("C")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Center(s) " + "<br/>"+ (cRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var te_Circle = svg.append("circle")
    .attr('cx', centerx +55)
    .attr('cy', 300)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(teRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Tight End(s) " + "<br/>"+ (teRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var te_Text =  svg.append("text")
    .attr("x", centerx +55)
    .attr("y", 305)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("TE")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Tight End(s) " + "<br/>"+ (teRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });



var qb_Circle = svg.append("circle")
    .attr('cx', centerx +85)
    .attr('cy', 210)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(qbRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Quarterback(s) " + "<br/>"+ (qbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var qb_Text =  svg.append("text")
    .attr("x", centerx +85)
    .attr("y", 215)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("QB")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Quarterback(s) " + "<br/>"+ (qbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var rb_Circle = svg.append("circle")
    .attr('cx', centerx +150)
    .attr('cy', 210)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(rbRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Running Back(s) " + "<br/>"+ (rbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var rb_Text =  svg.append("text")
    .attr("x", centerx + 150)
    .attr("y", 215)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("RB")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Running Backack(s) " + "<br/>"+ (rbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });



var s_Circle = svg.append("circle")
    .attr('cx', centerx - 115)
    .attr('cy', 150)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(sRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Safety(s) " + "<br/>"+ (sRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var s_Text =  svg.append("text")
    .attr("x", centerx - 115)
    .attr("y", 155)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("FS")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Safety(s) " + "<br/>"+ (sRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var s_Circle2 = svg.append("circle")
    .attr('cx', centerx - 115)
    .attr('cy', 270)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(sRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Safety(s) " + "<br/>"+ (sRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var s_Text2 =  svg.append("text")
    .attr("x", centerx - 115)
    .attr("y", 275)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("FS")
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Safety(s) " + "<br/>"+ (sRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var lb_Circle = svg.append("circle")
    .attr('cx', centerx - 35)
    .attr('cy', 170)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(olbRad + lbRad + ilbRad)} )
    .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Linebacker(s) " + "<br/>"+ (olbRad + lbRad + ilbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var lb_Text2 =  svg.append("text")
    .attr("x", centerx - 35)
    .attr("y", 175)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("LB")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Linebacker(s) " + "<br/>"+ (olbRad + lbRad + ilbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var lb_Circle1 = svg.append("circle")
    .attr('cx', centerx - 35)
    .attr('cy', 210)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(olbRad + lbRad + ilbRad)} )
var lb_Text1 =  svg.append("text")
    .attr("x", centerx - 35)
    .attr("y", 215)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("LB")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Linebacker(s) " + "<br/>"+ (olbRad + lbRad + ilbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

    

var lb_Circle2 = svg.append("circle")
    .attr('cx', centerx - 35)
    .attr('cy', 250)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(olbRad + lbRad + ilbRad)} )
var lb_Text2 =  svg.append("text")
    .attr("x", centerx - 35)
    .attr("y", 255)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("LB")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Linebacker(s) " + "<br/>"+ (olbRad + lbRad + ilbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var db_Circle1 = svg.append("circle")
    .attr('cx', centerx - 100)
    .attr('cy', 210)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(dbRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive back(s) " + "<br/>"+ (dbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var db_Text1 =  svg.append("text")
    .attr("x", centerx - 100)
    .attr("y", 215)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("DB")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive back(s) " + "<br/>"+ (dbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });



var cb_Circle = svg.append("circle")
    .attr('cx', centerx - 60)
    .attr('cy', 300)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(cbRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Cornerback(s) " + "<br/>"+ (cbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var cb_Text =  svg.append("text")
    .attr("x", centerx - 60)
    .attr("y", 305)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("CB")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Cornerback(s) " + "<br/>"+ (cbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var cb_Circle2 = svg.append("circle")
    .attr('cx', centerx - 60)
    .attr('cy', 120)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(cbRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Cornerback(s) " + "<br/>"+ (cbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var cb_Text2 =  svg.append("text")
    .attr("x", centerx - 60)
    .attr("y", 125)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("CB")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Cornerback(s) " + "<br/>"+ (cbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });



var de_Circle = svg.append("circle")
    .attr('cx', centerx + 5)
    .attr('cy', 135)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(deRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive End(s) " + "<br/>"+ (deRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var de_Text =  svg.append("text")
    .attr("x", centerx + 5)
    .attr("y", 140)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("DE")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive End(s) " + "<br/>"+ (deRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var de_Circle = svg.append("circle")
    .attr('cx', centerx + 5)
    .attr('cy', 285)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(deRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive End(s) " + "<br/>"+ (deRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var de_Text2 =  svg.append("text")
    .attr("x", centerx + 5)
    .attr("y", 290)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("DE")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive End(s) " + "<br/>"+ (deRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var fb_Circle = svg.append("circle")
    .attr('cx', centerx +115)
    .attr('cy', 190)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(fbRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Fullback(s) " + "<br/>"+ (fbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });


var fb_Text =  svg.append("text")
    .attr("x", centerx + 115)
    .attr("y", 195)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("FB")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Fullback(s) " + "<br/>"+ (fbRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var dt_Circle = svg.append("circle")
    .attr('cx', centerx + 5)
    .attr('cy', 185)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(dtRad + dlRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Fullback(s) " + "<br/>"+ (dtRad + dlRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var dt_Text =  svg.append("text")
    .attr("x", centerx + 5)
    .attr("y", 190)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("DT")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive Tackle(s) " + "<br/>"+ (dtRad + dlRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });



var dt_Circle2 = svg.append("circle")
    .attr('cx', centerx + 5)
    .attr('cy', 235)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorD(dtRad + dlRad )} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive Tackle(s) " + "<br/>"+ (dtRad + dlRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });
var dt2_Text =  svg.append("text")
    .attr("x", centerx + 5)
    .attr("y", 240)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("DT")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Defensive Tackle(s) " + "<br/>"+ (dtRad + dlRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });

var k_Circle = svg.append("circle")
    .attr('cx', centerx +230)
    .attr('cy', 240)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(kRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Kicker(s) " + "<br/>"+ (kRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });
var k_Text =  svg.append("text")
    .attr("x", centerx + 230)
    .attr("y", 245)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("K")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Kicker(s) " + "<br/>"+ (kRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });



var p_Circle = svg.append("circle")
    .attr('cx', centerx +230)
    .attr('cy', 180)
    .attr("r", 15)
    .style("stroke", "black")
    .style("fill", function(d) { return maxColorO(pRad)} )
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Punter(s) " + "<br/>"+ (kRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });
var p_Text =  svg.append("text")
    .attr("x", centerx + 230)
    .attr("y", 185)
    .attr('text-anchor', 'middle')
    .attr("class", "myLabel")
    .text("P")
        .on("mouseover", function(d) {      
            div.transition()        
                .duration(200)      
                .style("opacity", .9);      
            div .html("Punter(s) " + "<br/>"+ (kRad))  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY + 28) + "px");    
            })                  
        .on("mouseout", function(d) {       
            div.transition()        
                .duration(500)      
                .style("opacity", 0);     
        });
}


function init() {
  // Grab a reference to the dropdown select element
  const seasonSelector = d3.select("#selSeason");
  const seasonSelector2 = d3.select("#selSeason2");
  const teamSelecter = d3.select("#teamSelect");
  //Use the list of sample names to populate the select options

  d3.json("/teamnames").then(function (response1) {
    d3.json("/draftseasons").then(function (response2) {
  
    team_names = response1.teams
    seasons = response2.seasons
    //
    seasons.forEach((season) => {
      seasonSelector
        .append("option")
        .text(season)
        .property("value", season);
    });
    seasons.forEach((season) => {
      seasonSelector2
        .append("option")
        .text(season)
        .property("value", season);
    });
    //
    for (const [k, v] of Object.entries(team_names)) {
      teamSelecter
        .append("option")
        .text(v)
        .property("value", v);
    }
    let dateArray = sortYears(d3.select("#selSeason").property("value"),d3.select("#selSeason2").property("value"));
    buildCharts(d3.select("#teamSelect").property("value"),dateArray[0],dateArray[1])

    });
  });


}
function sortYears(arg1, arg2) {
    newArray = [arg1, arg2];
    sortedArray = newArray.sort(sortNumber)
    return sortedArray
}

function sortNumber(a, b) {
  return a - b;
}

function optionChangedSeason1(data) {
  // Fetch new data each time a new sample is selected
  let dateArray = sortYears(d3.select("#selSeason").property("value"),d3.select("#selSeason2").property("value"));
   

  buildCharts(d3.select("#teamSelect").property("value"),dateArray[0],dateArray[1])
}

function optionChangedSeason2(data) {
 
  let dateArray = sortYears(d3.select("#selSeason").property("value"),d3.select("#selSeason2").property("value"));
   

  buildCharts(d3.select("#teamSelect").property("value"),dateArray[0],dateArray[1])
}

function optionChangedTeam(data) {
  // Fetch new data each time a new sample is selected

  let dateArray = sortYears(d3.select("#selSeason").property("value"),d3.select("#selSeason2").property("value"));
   

  buildCharts(d3.select("#teamSelect").property("value"),dateArray[0],dateArray[1])
}


init();