//Daily visits
let barChartData = {
  type: "bar",
  gui:{ 
    contextMenu:{ 
      empty: true,
      button:{ 
        visible: false 
      } 
    } 
  },
  globals: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontColor: "#000",
    fontWeight: "500",
    
  },
  title: {
    visible: false,
  },
  legend: {
    visible: true,
      backgroundColor: 'transparent',
      borderColor: 'none',
      toggleAction: "hide",
      adjustLayout: false,
      align: "center",
      item: {
        fontColor: "#000",
        fontSize: "11",
        padding: "5px",
        margin: "0px",
        y: "-22",
      },
      itemOff: {
        fontColor: "#000",
        fontSize: "11",
        padding: "5px",
        margin: "0px",
        y: "-22",
      },
      marker: {
        cursor: "none",
        type: "circle",
        size: "4",
        offsetX: "8"
      }
  },
  plotarea: {
    margin: "25px 5px 20px 31px",
    height: "95%",
    backgroundColor: "transparent"
  },
  plot: {
    barWidth: "80%",
    borderRadius: 3,
    barSpace: 0,
    
    tooltip: {
      backgroundColor: "#000",
      
      paddingTop: "8%",
      paddingRight: "10px",
      paddingBottom: "8%",
      paddingLeft: "11px",
      borderColor: "#000",
      borderWidth: 0,
      borderRadius: 4,
      lineHeight: 17,
      fontFamily: "Inter",
      text: "%t <br> %v",
      textAlign: "center",
      shadow: false,
      fontColor: "#ffffff",
      
    },
  },
  scaleX: {
    lineWidth: 0,
    tick: {
      visible: false,
    },
    labels: ["9:00", "11:00", "13:00", "15:00", "17:00"],
  },
  scaleY: {
    lineWidth: 0,
    values: "0:750:250",
    tick: {
      visible: false,
    },
    guide: {
      lineStyle: "dashed",
      lineColor: "#EBEBEB",
    },
  },
  series: [
    {
      values: [500, 450, 550, 750, 660],
      backgroundColor: "#624CE0",
      text: "Mobile browsers",
      
    },
    {
      values: [300, 180, 250, 510, 300],
      backgroundColor: "#20C933",
      text: "Desktop",
    },
  ],
};
zingchart.render({
  id: "visitChart",
  data: barChartData,
  height: "230",
  width: "100%",
});
//Daily visits

//Radar(spider) chart
var configs = {
  type: 'radar',
  data: {
    labels: ["Development", "Design", "SMM", "Marketing", "Recruit"],
    datasets: [
            {
              label: 'Team "Alpha"',
              data: [300, 350, 130, 370, 124],
              backgroundColor: "rgba(10, 93, 255, .1)",
              borderColor: "#0A5DFF",
              lineTension: 0,
              borderWidth: 0,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "mitter",
              pointBackgroundColor: "#0A5DFF",
              pointBorderColor: "white",
              hoverBackgroundColor: "#0A5DFF",
              pointBorderWidth: 2,
              pointHitRadius: 5,
              pointHoverRadius: 7,
              pointRadius: 7,
              fill: true,
            },
            {
              label: 'Team "Beta"',
              data: [200, 350, 330, 270, 324],
              backgroundColor: "rgba(32, 201, 51, .1)",
              borderColor: "#20C933",
              lineTension: 0,
              borderWidth: 0,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "mitter",
              pointBackgroundColor: "#20C933",
              pointBorderColor: "white",
              hoverBackgroundColor: "#20C933",
              pointBorderWidth: 2,
              pointHitRadius: 5,
              pointHoverRadius: 7,
              pointRadius: 7,
              fill: true,
            },
          ],
  },
  options: {
    layout: {
      padding: {
        top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      },
    },
    responsive: true,
    scale: {
      ticks: {
        display: false,
      },
      pointLabels: {
        fontSize: 13,
        fontColor: '#000000',
      }
    },
      legend: {
          display: true,
          position: 'top',
          align: 'center',
          labels: {
            fontSize: 11,
            fontColor: '#000000',
            fontWeight: 'normal',
            boxColor: '#000000',
            boxWidth: 7,
            usePointStyle: true,
            padding: 5
        }
      },
      tooltips: {
              enabled: true,
              mode: "single",
              tooltipFontFamily: "Inter",
              callbacks: {
                title: function (tooltipItem, data) {
                  return data["labels"][tooltipItem[0]["index"]];
                },
                label: function (tooltipItem, data) {
                  return data["datasets"][0]["data"][tooltipItem["index"]];
                },
              },
              backgroundColor: "#000",
              titleFontSize: 11,
              titleFontColor: "rgba(255, 255, 255, 0.6)",
              bodyFontColor: "#fff",
              bodyFontSize: 14,
              displayColors: false,
              titleAlign: "center",
              bodyAlign: "center",
              padding: {
                left: 10,
                right: 10,
                top: 4,
                bottom: 4,
              },
            },
  }
};

var ctxd = document.getElementById('spiderChart').getContext('2d');
  window.mySpider = new Chart(ctxd, configs);
//Radar(spider) chart