function renderFrame(frame) {
    progress = frame / 3600;
    if (progress < 1) {
        let hour = floor(progress / (1/24));
        let hour_prog = (progress - hour * (1/24)) * 24;
        let next_hour = hour < 23 ? hour + 1 : 0;

        let angle = progress * TWO_PI + PI * 1.25;
        let unit_x = cos(angle);
        let unit_y = sin(angle);
        let bigger_x_y = max(abs(unit_x), abs(unit_y));

        drawTemp(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y);
        drawBright(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y);
        drawRain(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y);

        drawWind(hour, hour_prog, next_hour, angle, unit_x, unit_y, bigger_x_y);

        last_hour = hour;
    } else {
        noLoop();
    }
}

function renderAllFrames() {
    windParticle = new WindParticle();
    for (let i=0; i<3600; i++) {
        renderFrame(i);
    }
}