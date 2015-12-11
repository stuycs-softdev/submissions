// JS for the background color

var bg_color = {"red":255, "green":255, "blue":255};

var colorscroll = function colorscroll(e) {
    // Scroll the background color
    var delta = Math.floor((Math.random() * 100) + 1) - 50;
    if (delta < -20) {
        delta = -2;
    } else if (delta > -20) {
        delta = 2;
    } else {
        delta = 0;
    }
    bg_color['red'] = (bg_color['red'] + delta + 256) % 256;

    delta = Math.floor((Math.random() * 100) + 1) - 50;
    if (delta < -20) {
        delta = -2;
    } else if (delta > -20) {
        delta = 2;
    } else {
        delta = 0;
    }
    bg_color['green'] = (bg_color['green'] + delta + 256) % 256;

    delta = Math.floor((Math.random() * 100) + 1) - 50;
    if (delta < -20) {
        delta = -2;
    } else if (delta > -20) {
        delta = 2;
    } else {
        delta = 0;
    }
    bg_color['blue'] = (bg_color['blue'] + delta + 256) % 256;

    document.body.style.backgroundColor = "rgb(" + [bg_color['red'],bg_color['green'],bg_color['blue']].join() + ")";
}

bg_color["red"] = Math.floor((Math.random() * 256) + 1);
bg_color["green"] = Math.floor((Math.random() * 256) + 1);
bg_color["blue"] = Math.floor((Math.random() * 256) + 1);

var colorscroll_run = setInterval(colorscroll, 800);

