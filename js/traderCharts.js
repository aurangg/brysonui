//Trend charts
const colors = {
  purple: {
    default: "rgba(98, 76, 224, 1)",
    half: "rgba(98, 76, 224, 0.2)",
    zero: "rgba(98, 76, 224, 0)",
  },
};

const price = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
const priceTwo = [30.0, 50.2, 29.1, 61.4, 39.9, 50.2, 29.8, 58.6, 49.6, 59.2];
const priceThree = [50.0, 30.2, 49.1, 61.4, 39.9, 20.2, 49.8, 38.6, 49.6, 59.2];
const priceFour = [20.0, 40.2, 59.1, 31.4, 49.9, 20.2, 59.8, 38.6, 29.6, 69.2];
const priceFive = [40.0, 20.2, 59.1, 21.4, 59.9, 40.2, 59.8, 28.6, 49.6, 59.2];
const priceSix = [30.0, 50.2, 29.1, 41.4, 59.9, 20.2, 69.8, 38.6, 49.6, 29.2];
const priceSeven = [60.0, 40.2, 29.1, 51.4, 29.9, 40.2, 59.8, 38.6, 49.6, 59.2];
const priceEight = [40.0, 20.2, 39.1, 21.4, 39.9, 50.2, 19.8, 38.6, 29.6, 49.2];
const priceNine = [60.0, 30.2, 49.1, 21.4, 49.9, 50.2, 39.8, 48.6, 59.6, 39.2];
const priceTen = [30.0, 50.2, 29.1, 61.4, 39.9, 50.2, 29.8, 58.6, 49.6, 59.2];

const labels = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 9",
  "Week 10",
];

const ctx = document.getElementById("trendFirstChart").getContext("2d");
ctx.canvas.height = 50;
const ctxTwo = document.getElementById("trendSecondChart").getContext("2d");
ctxTwo.canvas.height = 50;
const ctxThree = document.getElementById("trendThirdChart").getContext("2d");
ctxThree.canvas.height = 50;
const ctxFour = document.getElementById("trendFourthChart").getContext("2d");
ctxFour.canvas.height = 50;
const ctxFive = document.getElementById("trendFifthChart").getContext("2d");
ctxFive.canvas.height = 50;
const ctxSix = document.getElementById("trendSixthChart").getContext("2d");
ctxSix.canvas.height = 50;
const ctxSeven = document.getElementById("trendSeventhChart").getContext("2d");
ctxSeven.canvas.height = 50;
const ctxEight = document.getElementById("trendEightChart").getContext("2d");
ctxEight.canvas.height = 50;
const ctxNine = document.getElementById("trendNinthChart").getContext("2d");
ctxNine.canvas.height = 50;
const ctxTen = document.getElementById("trendTenthChart").getContext("2d");
ctxTen.canvas.height = 50;

gradient = ctx.createLinearGradient(0, 10, 0, 75);
gradient.addColorStop(0, colors.purple.half);
gradient.addColorStop(1, colors.purple.zero);
gradientTwo = ctx.createLinearGradient(0, 0, 0, 220);
gradientTwo.addColorStop(0, colors.purple.half);
gradientTwo.addColorStop(1, colors.purple.zero);

const options = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        borderColor: colors.purple.default,
        data: price,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsTwo = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        borderColor: colors.purple.default,
        data: priceTwo,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsThree = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradientTwo,
        borderColor: colors.purple.default,
        data: priceThree,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsFour = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradientTwo,
        borderColor: colors.purple.default,
        data: priceFour,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsFive = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradientTwo,
        borderColor: colors.purple.default,
        data: priceFive,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsSix = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradientTwo,
        borderColor: colors.purple.default,
        data: priceSix,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsSeven = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        borderColor: colors.purple.default,
        data: priceSeven,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsEight = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        borderColor: colors.purple.default,
        data: priceEight,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsNine = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        borderColor: colors.purple.default,
        data: priceNine,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const optionsTen = {
  type: "line",
  data: {
    labels: labels,
    plotArea: {
      adjustLayout: true,
      offsetX: "10",
    },
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        borderColor: colors.purple.default,
        data: priceTen,
        lineTension: 0,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    layout: {
      padding: 0,
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

  window.myLine = new Chart(ctx, options);
  window.myLine = new Chart(ctxTwo, optionsTwo);
  window.myLine = new Chart(ctxThree, optionsThree);
  window.myLine = new Chart(ctxFour, optionsFour);
  window.myLine = new Chart(ctxFive, optionsFive);
  window.myLine = new Chart(ctxSix, optionsSix);
  window.myLine = new Chart(ctxSeven, optionsSeven);
  window.myLine = new Chart(ctxEight, optionsEight);
  window.myLine = new Chart(ctxNine, optionsNine);
  window.myLine = new Chart(ctxTen, optionsTen);

//Trend charts
