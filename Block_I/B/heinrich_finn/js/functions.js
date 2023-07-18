// calc temp color
const min_temp = -20;
const max_temp = 40;
const temp_gradient = [   // Farben von https://codepen.io/alstof/pen/oeqojQ
  "#264CFF",
  "#3FA0FF",
  "#72D8FF",
  "#AAF7FF",
  "#E0FFFF",
  "#FFFFBF",
  "#FFE099",
  "#FFAD72",
  "#F76D5E",
  "#D82632",
  "#A50121"
];
function getTempColor(temp) {
  temp = constrain(temp, min_temp, max_temp);
  let gradient_count = temp_gradient.length - 1;
  let clr_index = min(floor((temp - min_temp)/((max_temp-min_temp) / gradient_count)), gradient_count - 1);
  let gradient_x = ((temp - min_temp) - clr_index * ((max_temp-min_temp) / gradient_count)) / ((max_temp-min_temp) / gradient_count);
  colorMode(RGB);
  return lerpColor(color(temp_gradient[clr_index]), color(temp_gradient[clr_index + 1]), gradient_x);
}

// DRAW FUNCTIONS

function drawTemp(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y) {
  // Temperatur
  let temp_now = weatherData_day['hour'][hour]['temp_c'];
  let temp_next = weatherData_day['hour'][next_hour]['temp_c'];
  let temp_frame = temp_now + (temp_next - temp_now) * hour_prog;

  let temp_line_start = createVector(unit_x * (width/2 / bigger_x_y) + width/2, unit_y * (width/2 / bigger_x_y) + width/2);
  let temp_line_end = createVector(unit_x * ((width/2 - 70) / bigger_x_y) + width/2, unit_y * ((width/2 - 70) / bigger_x_y) + width/2);

  stroke(getTempColor(temp_frame));
  strokeWeight(2);
  line(temp_line_start.x, temp_line_start.y, temp_line_end.x, temp_line_end.y);
}

function drawBright(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y) {
  // Helligkeit
  let is_day = weatherData_day['hour'][hour]['is_day'];
  let is_day_next = weatherData_day['hour'][next_hour]['is_day'];
  let is_day_frame = is_day + (is_day_next - is_day) * hour_prog;

  let cloud = weatherData_day['hour'][hour]['cloud'];
  let cloud_next = weatherData_day['hour'][next_hour]['cloud'];
  let cloud_frame = cloud + (cloud_next - cloud) * hour_prog;

  let bright_line_start = createVector(unit_x * ((width/2 - 80) / bigger_x_y) + width/2, unit_y * ((width/2 - 80) / bigger_x_y) + width/2);
  let bright_line_end = createVector(unit_x * ((width/2 - 125) / bigger_x_y) + width/2, unit_y * ((width/2 - 125) / bigger_x_y) + width/2);

  colorMode(HSB, 360, 100, 100);
  stroke(0, 0, is_day_frame * 100 - cloud_frame/1.6);
  strokeWeight(2);
  line(bright_line_start.x, bright_line_start.y, bright_line_end.x, bright_line_end.y);
}

function drawRain(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y) {
  // Niederschlag
  let precip = weatherData_day['hour'][hour]['precip_mm'];
  let precip_next = weatherData_day['hour'][next_hour]['precip_mm'];
  precip = precip + (precip_next - precip) * rainFadeBezier(hour_prog);


  // if (hour != last_hour) {
  //   raindrops.push(new Raindrop(135 + progress * (width - 135*2), random(-135, 135), precip));
  // }

  let bright_line_start = createVector(unit_x * ((width/2 - 80) / bigger_x_y) + width/2, unit_y * ((width/2 - 80) / bigger_x_y) + width/2);
  let bright_line_end = createVector(unit_x * ((width/2 - 125) / bigger_x_y) + width/2, unit_y * ((width/2 - 125) / bigger_x_y) + width/2);
  let bright_line_vec = bright_line_end.copy().sub(bright_line_start);
  precip = constrain(precip, 0, 50);
  precip_mag = map(precip, 0, 50, 0, bright_line_vec.mag()*2);
  bright_line_end = bright_line_start.copy().add(bright_line_vec.setMag(precip_mag));

  stroke("#205afa");
  strokeWeight(2);
  if (precip_mag == 0) {
    noStroke();
  }
  line(bright_line_start.x, bright_line_start.y, bright_line_end.x, bright_line_end.y);

  //old raindrops in middle
  // for(let i=0; i<raindrops.length; i++) {
  //   raindrops[i].update();
  //   if (raindrops[i].get_y() > 135) {
  //     raindrops[i].render();
  //   }
  //   if (raindrops[i].get_y() == (width - 135)) {
  //     raindrops.splice(i, 1);
  //   }
  // }
}

function drawWind(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y) {
  // Wind
  let wind_strength = weatherData_day['hour'][hour]['wind_kph'];
  let wind_strength_next = weatherData_day['hour'][next_hour]['wind_kph'];
  let wind_strength_frame = wind_strength + (wind_strength_next - wind_strength) * hour_prog;

  let wind_angle = weatherData_day['hour'][hour]['wind_degree'];
  let wind_angle_next = weatherData_day['hour'][next_hour]['wind_degree'];

  let acc = createVector(1,1).rotate(radians(wind_angle) - PI/4*3);
  let acc_next = createVector(1,1).rotate(radians(wind_angle_next) - PI/4*3);
  let acc_frame = acc.add(acc_next.sub(acc.copy()).mult(hour_prog)).setMag(wind_strength_frame/5);

  windParticle.update(acc_frame);
  windParticle.render();
}

function getBase64Img() {
    return canvas.toDataURL();
}