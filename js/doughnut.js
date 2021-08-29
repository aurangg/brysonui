//Doughnut
var configd = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                50,
                60,
                20,
                80
            ],           
            backgroundColor: [
                '#FFA800',
                "#DD0AFF",
                "#0A5DFF",
                "#20C933",
                "#624CE0"
            ],
            label: 'OS'
        }],
        labels: [
            'OSX',
            'Windows',
            'Android',
            'IOS',
        ]
    },
    options: {
      cutoutPercentage: 65,
      circumference: 1 * Math.PI,
      rotation: 1 * Math.PI,
        responsive: true,
        legend: {
            display: false
        },
        legendCallback: function (chart) {             
            // Return the HTML string here.
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"   onclick="updateDataset(event, ' + '\'' + i + '\'' + ')">');
                text.push('</span >');
                text.push('<span id="legend-' + i + '-item" onclick="updateDataset(event, ' + '\'' + i + '\'' + ')">');
                if (chart.data.labels[i]) {
                    text.push(chart.data.labels[i]);
                }
                text.push('</span></li>');
                
            }
            text.push('</ul>');
            return text.join("");
        },
        title: {
            display: false,
        },
        animation: {
            animateScale: true,
            animateRotate: true
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
                  left: 11,
                  right: 11,
                  top: 4,
                  bottom: 4,
                },
              },
    }
  };
  
  var ctxd = document.getElementById('doughnutChart').getContext('2d');
    
    window.myDoughnut = new Chart(ctxd, configd);
    $("#do_legend").html(window.myDoughnut.generateLegend());
  
  // Show/hide chart by click legend
  updateDataset = function (e, datasetIndex) {    
    var index = datasetIndex;
    var ci = e.view.myDoughnut;
    var meta = ci.getDatasetMeta(0);    
    var result= (meta.data[datasetIndex].hidden == true) ? false : true;
    if(result==true)
    {
        meta.data[datasetIndex].hidden = true;
        $('#' + e.path[0].id).css("text-decoration", "line-through");
    }else{
        $('#' + e.path[0].id).css("text-decoration","");
        meta.data[datasetIndex].hidden = false;
    }
     
    ci.update();   
  };
  //Doughnut