//Radial chart
(function($) {

  $.fn.dial = function(options) {
    var dom = $(this)[0];
    var ctx = dom.getContext('2d');
    var settings = $.extend({
      height: 200,
      value: 0,
      low: 0,
      high: 100,
      animate: true,
      onAnimateFrame: $.noop,
      animation: {
        duration: 1,
        countBy: 1
      },
      stroke: {
        background: {
          color: "rgba(10,93,255,0.25)"
        },
        width: 30,
        color: "rgb(10,93,255)"
      },
      font: {
        number: {
          size: "32px",
          family: "Inter",
          weight: "700",
          color: "black",
          offset: 0
        },
        minMax: {
          size: "0rem",
          family: "serif",
          color: "white"
        }
      },
      padding:20,
      paddingTop:0
    }, options);

    $(this).attr('height', settings.height);
    if (settings.width)
      $(this).attr('width', settings.width);
    else
      $(this).attr('width', settings.height);

    settings.width = $(this).attr('width');

    return {
      draw: function(onFrame) {
        ctx.clearRect(0, 0, 300, 300);
        if (!settings.animate) {
          //End Position: ((Input - InputLow) / (InputHigh - InputLow)) * (OutputHigh - OutputLow) + OutputLow;
          var radian = ((settings.value - settings.low) / (settings.high - settings.low) * (0 + 1) - 1);
          
          //Background Bar
          ctx.beginPath();
          ctx.arc(dom.width / 2, settings.height / 2 - settings.paddingTop, (settings.width || settings.height) / 2 - settings.padding, -1 * Math.PI, 0 * Math.PI);
          ctx.strokeStyle = settings.stroke.background.color;
          ctx.lineWidth = settings.stroke.width;
          ctx.stroke();
          
          //Bar
          ctx.beginPath();
          ctx.arc(dom.width / 2, settings.height / 2 - settings.paddingTop, (settings.width || settings.height) / 2 - settings.padding, -1 * Math.PI, radian * Math.PI);
          ctx.strokeStyle = settings.stroke.color;
          ctx.lineWidth = settings.stroke.width;
          ctx.stroke();
          
          //Number value
          ctx.font = settings.font.number.size + " " + settings.font.number.family;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          ctx.fillStyle = settings.font.number.color;
          ctx.fillText(settings.value, dom.width / 2, dom.height / 2 + settings.font.number.offset - settings.paddingTop);

          //Left Number
          ctx.font = settings.font.minMax.size + " " + settings.font.minMax.family;
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillStyle = settings.font.minMax.color;
          ctx.fillText(settings.low, settings.padding, dom.height / 2 - settings.paddingTop);

          //Right Number
          ctx.font = settings.font.minMax.size + " " + (settings.font.minMax.family || settings.font.number.family);
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillStyle = settings.font.minMax.color;
          ctx.fillText(settings.high, settings.width - settings.padding, dom.height / 2 - settings.paddingTop);
          
        } else {
          animate(0);
        }

        function animate(value) {
          var radian = ((value - settings.low) / (settings.high - settings.low) * (0 + 1) - 1);
          var time = (settings.animation.duration * 1000) / settings.value;
          setTimeout(function() {
            ctx.clearRect(0, 0, 300, 300);
            //Bar Background
            ctx.beginPath();
            ctx.arc(dom.width / 2, settings.height / 2 - settings.paddingTop, (settings.width || settings.height) / 2 - settings.padding, -1 * Math.PI, 0 * Math.PI);
            ctx.strokeStyle = settings.stroke.background.color;
            ctx.lineWidth = settings.stroke.width;
            ctx.stroke();
            
            //Bar
            ctx.beginPath();
            ctx.arc(dom.width / 2, dom.height / 2 - settings.paddingTop, dom.width / 2 - settings.padding, -1 * Math.PI, radian * Math.PI);
            ctx.strokeStyle = settings.stroke.color;
            ctx.lineWidth = settings.stroke.width;
            ctx.stroke();
            
            //Number value
            ctx.font = settings.font.number.size + " " + settings.font.number.family;
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.fillStyle = settings.font.number.color;
          ctx.fillText(value, dom.width / 2, dom.height / 2 + settings.font.number.offset - settings.paddingTop);

            //Left Number
            ctx.font = settings.font.minMax.size + " " + settings.font.minMax.family;
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillStyle = settings.font.minMax.color;
            ctx.fillText(settings.low, settings.padding, dom.height / 2 - settings.paddingTop);

            //Right Number
            ctx.font = settings.font.minMax.size + " " + (settings.font.minMax.family || settings.font.number.family);
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillStyle = settings.font.minMax.color;
            ctx.fillText(settings.high, settings.width - settings.padding, dom.height / 2 - settings.paddingTop);
            
            if($.isFunction(settings.onAnimateFrame))
              settings.onAnimateFrame.call(ctx, settings, value);
            
            if (value + settings.animation.countBy < settings.value) {
              value = value + settings.animation.countBy;
              animate(value);
            } else if (value < settings.value) {
              value = value + 1;
              animate(value);
            }
          }, time);
        }
      }
    };
  };
  
}(jQuery));
//End of the JQuery Plugin

//Sample
var dial = $('.dial').dial({
  height: 250,
  value: 72,
  animate: true,
  onAnimateFrame: add,
  animation: {
    duration: 1
  }
});

function add(settings, value) {
  this.font = "13px Inter";
  this.textAlign = "center";
  this.textBaseline = "top";
  this.fillStyle = "black";
  
  var rating = "";
  if(value <= 10)
    rating = "Received"
  else if(value > 10 && value <= 30)
    rating = "Received"
  else if(value > 30 && value <= 50)
    rating = "Received"
  else if(value > 50 && value <= 70)
    rating = "Received"
  else if(value > 70 && value <= 100)
    rating = "Received"
    
  //Number value
  this.fillText(rating, settings.width / 2, settings.height / 3.5);
}

dial.draw();
//Radial chart