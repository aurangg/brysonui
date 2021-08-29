//Bar chart
var chartData = {
    type: "bar",
    gui:{ 
      contextMenu:{ 
        button:{ 
          visible: false 
        } 
      } 
    }, 
    scaleX: {
      labels: [20.22, 21.22, 22.22, 23.22, 24.22, 25.22],
      visible: false,
    },
    scaleY: {
      visible: false,
    },
    legend: {
      visible: false,
    },
    title: {
      visible: false,
    },
    plotarea: {
      margin: "25% 0 4% 0",
    },
    plot: {
      tooltip: {
        backgroundColor: "#000",
        padding: "6 8 8 8",
        borderColor: "#000",
        borderWidth: 0,
        borderRadius: 4,
        lineHeight: 17,
        fontFamily: "Inter",
        text: "%v$ <br>%kl",
        shadow: false,
      },
      animation: {
        effect: "4",
        speed: "1000",
        method: "4",
      },
    },
  
    series: [
      {
        values: [3500, 4200, 1670, 2774, 3000, 1500],
        backgroundColor: "rgba(32, 201, 51, .25)",
        borderWidth: 0,
        borderColor: "rgba(32, 201, 51, .25)",
        borderRadius: 2,
      },
      {
        values: [2800, 4000, 1390, 3600, 1000, 2500],
        backgroundColor: "#20C933",
        borderWidth: 0,
        borderColor: "#20C933",
        borderRadius: 2,
      },
    ],
  };
  
  zingchart.render({
    id: "barChart",
    data: chartData,
    height: 125,
    width: "100%",
  });
  //Bar chart end
  
  //Area chart
  
  let myTaxesConfig = {
    type: "area",
    gui:{ 
      contextMenu:{ 
        button:{ 
          visible: false 
        } 
      } 
    },
    plotarea: {
      margin: "10% 0 0 0%",
      paddingBottom: 20,
    },
    scaleX: {
      values: [20.22, 21.22, 22.22, 23.22, 24.22, 25.22, 26.22, 27.22, 28.22],
      visible: false,
    },
    scaleY: {
      values: "0:10000:250",
      visible: false,
      x: 20,
    },
    series: [
      {
        values: [
          [20.22, 4500],
          [21.22, 5000],
          [22.22, 7000],
          [23.22, 2000],
          [24.22, 6500],
          [25.22, 1800],
          [26.22, 3450],
          [27.22, 1250],
          [28.22, 4000],
        ],
        lineColor: "#624CE0",
        backgroundColor: "rgba(98, 76, 224, 0.11)",
      },
    ],
  
    labels: {
      visible: false,
    },
  
    title: {
      visible: false,
    },
  
    plot: {
      aspect: "line",
      lineWidth: 2,
      lineStyle: "solid",
      lineColor: "#624CE0",
      zIndex: 2,
      marker: {
        visible: false,
      },
      hoverState: {
        visible: true,
        shadow: true,
        borderWidth: 1,
      },
      hoverMarker: {
        visible: true,
        backgroundColor: "#624CE0",
        type: "circle",
        size: 7,
        borderColor: "white",
        borderWidth: 2,
        offsetY: -0,
        zIndex: 1,
      },
      tooltip: {
        backgroundColor: "#000",
        padding: "6 8 10 8",
        borderColor: "#000",
        borderWidth: 0,
        borderRadius: 4,
        lineHeight: 17,
        fontFamily: "Inter",
        text: "%v$ <br>%kl",
        shadow: false,
      },
      animation: {
        effect: "4",
        speed: "1000",
        method: "4",
      },
    },
    crosshairX: {
      lineColor: "black",
      lineStyle: "dashed",
      zIndex: 0,
      trigger: "move",
      lineWidth: 2,
      scaleLabel: false,
      plotLabel: {
        visible: false,
      },
      lineSegmentSize: 8,
      exact: true,
    },
  };
  
  zingchart.render({
    id: "myTaxes",
    data: myTaxesConfig,
    height: 125,
    width: "120%",
  });
  
  zingchart.shape_click = function (p) {
    if (p.shapeid == "animation1") {
      zingchart.exec("myTaxes", "reload");
    }
  };
  
  //Area chart end
  
  
  
  