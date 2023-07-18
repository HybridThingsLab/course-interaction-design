var weatherData_ten;
var weatherData_day;
var progress = 0;
var frame_started = 0;
var last_hour = -1;
var currentDay = 0;
var dayCount;

var animation_started = false;
var paused = false;

var raindrops = [];
var windParticle;

var renders = [];

var rainFadeBezier = BezierEasing(.5,.1,.5,.9);

const urlParams = new URLSearchParams(window.location.search);

function preload() {
  if (urlParams.has('place')) {
    $('#place').attr('value', urlParams.get('place'));
    weatherData_ten = loadJSON("https://finnrich.de/api/getWeather/getWeather.php?day=3&place=" + urlParams.get('place'));
  } else {
    $('#noPlace').show();
  }
}

function setup() {
  frameRate(60);
  dayCount = weatherData_ten['forecast']['forecastday'].length;

  weatherData_day = weatherData_ten['forecast']['forecastday'][0];
  var canvas = createCanvas(800, 800);
  canvas.parent("canvas-cont");
  background(0);

  insertData();

  windParticle = new WindParticle();

  $('section#all').show();
}

function draw() {

  if (frameCount <= dayCount) {
    weatherData_day = weatherData_ten["forecast"]["forecastday"][frameCount-1];
    renderAllFrames();
    renders.push(getBase64Img());
    background(0);
  } else {
    weatherData_day = weatherData_ten['forecast']['forecastday'][currentDay];
    // Rendering 10 days has finished
    if (!animation_started) {
      $('#bg').append('<img src="' + renders[currentDay] + '">');
      resize();
      frame_started = frameCount;
      animation_started = true;
      windParticle = new WindParticle();

      document.querySelector('#arrows #left').addEventListener('click', (el) => {
        if (currentDay > 0 && currentDay < dayCount) {
          windParticle = new WindParticle();
          currentDay--;
          $('#bg').empty();
          $('#bg').append('<img src="' + renders[currentDay] + '">');
          weatherData_day = weatherData_ten['forecast']['forecastday'][currentDay];
          frame_started = frameCount;
          paused = false;
          loop();
          background(0);
          if (currentDay == 0) {
            $('#arrows #left').removeClass('active');
          }
          $('#arrows #right').addClass('active');
          insertData();
          $('#canvas-cont img').remove();
        }
      });

      document.querySelector('#arrows #right').addEventListener('click', (el) => {
        if (currentDay >= 0 && currentDay < dayCount - 1) {
          windParticle = new WindParticle();
          currentDay++;
          $('#bg').empty();
          $('#bg').append('<img src="' + renders[currentDay] + '">');
          weatherData_day = weatherData_ten['forecast']['forecastday'][currentDay];
          frame_started = frameCount;
          paused = false;
          loop();
          background(0);
          if (currentDay == 2) {
            $('#arrows #right').removeClass('active');
          }
          $('#arrows #left').addClass('active');
          insertData();
          $('#canvas-cont img').remove();
        }
      });

      document.querySelector('#finish').addEventListener('click', (el) => {
        finishRender();
      });
    }

    if (frameCount - frame_started > 3600 && !paused) {
      finishRender();
      paused = true;
    } else {
      renderFrame(frameCount - frame_started);
    }
  }
  
}


window.onresize = function() {
  resize();
}

function resize() {
  $('#canvas-cont').css('min-width', $('#canvas-cont').height() + 'px');
  $(':root').css('--w', $('section#all').width() + 'px');
  $(':root').css('--h', $('section#all').height() + 'px');
}

function finishRender() {
  $('#canvas-cont').append('<img src="' + renders[currentDay] + '">');
  setTimeout(() => {
    $('#canvas-cont > img').css('opacity', '1');
  })
}

function insertData() {
  $('#condition').text(weatherData_day['day']['condition']['text']);
  $('#locdate').text('in ' + weatherData_ten['location']['name'] + ', ' + weatherData_day['date'].replaceAll('-', '/'));
  $('#mintemp').text(weatherData_day['day']['mintemp_c'] + '°C');
  $('#mintemp').css('color', getTempColor(weatherData_day['day']['mintemp_c']));
  $('#maxtemp').text(weatherData_day['day']['maxtemp_c'] + '°C');
  $('#maxtemp').css('color', getTempColor(weatherData_day['day']['maxtemp_c']));
  $('#wind').text(weatherData_day['day']['maxwind_kph'] + ' km/h');
  $('#rain').text(weatherData_day['day']['totalprecip_mm'] + ' mm');
}