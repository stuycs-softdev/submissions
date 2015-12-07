// Constants
var projectile_timeout = 25;
var player_hitbox = 15;

// Globals
var mouse_x;
var mouse_y;
var start_time = Math.floor(Date.now() / 500);
var score = 0;
var player = document.getElementById("player");
var player_style = document.querySelector(".player");
var scoreboard = document.getElementById("scoreboard");
var player_updater;
var projectile_spawner;
var projectile_updater;
var score_updater;

var pos_neg_multiplier = function pos_neg_multiplier(i) {
    if (isNaN(i)) {
        console.log(i);
        return 0;
    }
    if (i < 0) return -1;
    if (i >= 0) return 1;
};

// Player Movement
var update_mouse_loc = function update_mouse_loc(e) {
    mouse_x = e.pageX;
    mouse_y = e.pageY;
};

window.addEventListener('mousemove', update_mouse_loc);

var update_player_loc = function update_player_loc() {
    player_style.style.left = mouse_x + "px";
    player_style.style.top = mouse_y + "px";
};

player_updater = setInterval(update_player_loc, 10);

// Projectile Spawning
var spawn_new_projectile = function spawn_new_projectile() {
    var new_projectile = document.createElement("img");
    new_projectile.setAttribute("src", "resources/projectile.png");
    new_projectile.setAttribute("class", "projectile");
    new_projectile.style.top = ($(window).height() / 2) + "px";
    new_projectile.style.left = ($(window).width() / 2) + "px";

    // Load targets
    new_projectile.setAttribute("target_x", mouse_x);
    new_projectile.setAttribute("target_y", mouse_y);

    // Get a speed
    var factor = 50 + (Math.floor(Math.random() * 100) % 10);
    var constant = (1 + (Math.floor(Math.random() * 100) % 5)) * pos_neg_multiplier(mouse_x - ($(window).width() / 2));
    new_projectile.setAttribute("speed_x", constant + (mouse_x - ($(window).width() / 2)) / factor);
    factor = 50 + (Math.floor(Math.random() * 100) % 10);
    constant = (1 + (Math.floor(Math.random() * 100) % 5)) * pos_neg_multiplier(mouse_y - ($(window).height() / 2));
    new_projectile.setAttribute("speed_y", constant + (mouse_y - ($(window).height() / 2)) / factor);

    // Make a timestamp so we can kill it off past a certain time point
    new_projectile.setAttribute("timestamp", Math.floor(Date.now() / 1000));
    document.body.appendChild(new_projectile);
};

projectile_spawner = setInterval(spawn_new_projectile, 90);

// Projectile Updating
var update_projectiles = function update_projectiles() {
    var projectiles = document.getElementsByClassName("projectile");
    var deletions = new Array(projectiles.length).fill(false);
    for (var i = 0; i < projectiles.length; i++) {
        if (Math.floor(Date.now() / 1000) - parseInt(projectiles[i].getAttribute("timestamp")) >= projectile_timeout) {
            deletions[i] = true;
        }
        var curr_x = projectiles[i].style.left.substring(0, projectiles[i].style.left.length - 2);
        var curr_y = projectiles[i].style.top.substring(0, projectiles[i].style.top.length - 2);
        curr_x = parseInt(curr_x);
        curr_y = parseInt(curr_y);
        if (Math.abs(curr_x - mouse_x) <= player_hitbox && Math.abs(curr_y - mouse_y) <= player_hitbox) {
            window.clearTimeout(player_updater);
            window.clearTimeout(projectile_spawner);
            window.clearTimeout(projectile_updater);
            window.clearTimeout(score_updater);
        }
        if (curr_x < 0 || curr_x >= $(window).width() || curr_x < 0 || curr_y >= $(window).height()) {
            deletions[i] = true;
        }
        curr_x += parseInt(projectiles[i].getAttribute("speed_x"));
        curr_y += parseInt(projectiles[i].getAttribute("speed_y"));
        projectiles[i].style.left = curr_x + "px";
        projectiles[i].style.top = curr_y + "px";
    }
    for (var i = 0; i < deletions.length; i++) {
        if (deletions[i]) {
            projectiles[i].parentNode.removeChild(projectiles[i]);
        }
    }
};

projectile_updater = setInterval(update_projectiles, 10);

// Update the Scoreboard

var update_score = function update_score() {
    score = Math.floor(Date.now() / 500) - start_time;
    scoreboard.innerHTML = "Score: " + (score * 100);
};

score_updater = setInterval(update_score, 100);

