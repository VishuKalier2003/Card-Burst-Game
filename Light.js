const screen = document.getElementById("screen");

function CreateLightBulbs() {
    // Creating span tags all over the board
    const bulb = document.createElement("span");
    // Setting their attributes and their class selector
    bulb.setAttribute("class", "bulbs");
    // Random generation of those bulbs
    bulb.style.top = Math.floor(Math.random() * (innerHeight / 50)) * 50 + "px";
    bulb.style.left = Math.floor(Math.random() * (innerWidth / 50)) * 50 + "px";
    // Adding the bulbs to the screen board
    screen.appendChild(bulb);
    // Making the bulbs disappear after 10 seconds
    setTimeout(() => {
        bulb.remove();
    }, 10000);
}

// Calling the above function twice...
setInterval(CreateLightBulbs, 10);
setInterval(CreateLightBulbs, 10);

const span2 = document.getElementById("span2");
const start = document.getElementById("start");
start.addEventListener("mouseenter", function() {
    span2.classList.add("green-tick");
    start.style.transitionDelay = "2s";
    start.style.transitionDuration = "1s";
    start.style.backgroundColor = "rgba(0, 255, 0)";
    start.style.boxShadow = "0px 0px 3px 4px rgb(0, 255, 0)";
});

start.addEventListener("mouseleave", function() {
    span2.classList.remove("green-tick");
    start.style.transitionDuration = "0.5s";
    start.style.backgroundColor = "rgb(255, 255, 255, 0.6)";
    start.style.boxShadow = "none";
});

const span1 = document.getElementById("span1");
const end = document.getElementById("end");
end.addEventListener("mouseenter", function() {
    span1.classList.add("red-tick");
    end.style.transitionDelay = "2s";
    end.style.transitionDuration = "1s";
    end.style.backgroundColor = "rgba(255, 0, 0)";
    end.style.boxShadow = "0px 0px 3px 4px rgb(255, 0, 0)";
});

end.addEventListener("mouseleave", function() {
    span1.classList.remove("red-tick");
    end.style.transitionDuration = "0.5s";
    end.style.backgroundColor = "rgb(255, 255, 255, 0.6)";
    end.style.boxShadow = "none";
});

const rules = document.getElementById("rules");
const burst = document.getElementById("burst");
const pool = document.getElementById("pool");
const begin = document.getElementById("begin");
const scoreboard = document.getElementById("scoreboard");
const score_span = document.getElementById("score-span");
const life_span = document.getElementById("lives-span");
const final = document.getElementById("final-score");
const final_points = document.getElementById("final-points");
start.addEventListener("click", function() {
    burst.classList.add("move-up");
    pool.classList.add("move-left");
    start.classList.add("move-left");
    end.classList.add("move-up");
    rules.classList.add("move-down");
});

end.addEventListener("click", function() {
    window.location.reload();
});

const color_array = ["rgb(0, 54, 255)",
    "rgb(15, 245, 10)",
    "rgb(255, 221, 0)",
    "rgb(252, 3, 38)",
    "rgb(255, 0, 215)",
    "rgb(73, 182, 170)",
    "rgb(255, 255, 255)"
];

var check1 = false,
    check2 = false;
var lives = 5;
var points = 0;

function CreateBlocks() {
    const blocks = document.createElement("span");
    blocks.setAttribute("id", "block-juggle");
    var size = Math.random() * 50 + 50;
    var border = Math.random() * 50;
    var color = Math.floor(Math.random() * color_array.length);
    blocks.style.backgroundColor = color_array[color];
    blocks.style.width = size + "px";
    blocks.style.height = size + "px";
    blocks.style.top = innerHeight + "px";
    blocks.style.left = Math.random() * innerWidth + "px";
    blocks.style.borderRadius = border + "%";
    blocks.addEventListener("click", function() {
        blocks.style.backgroundColor = "rgb(0, 0 ,0, 0.0)";
        blocks.style.width = "5px";
        blocks.style.height = "5px";
        blocks.style.transitionDuration = "1s";
        setTimeout(() => {
            blocks.remove();
        }, 1000);
        check1 = true;
    });
    if (check1 == true) {
        check1 = false;
    }
    screen.appendChild(blocks);
    const blocks1 = document.createElement("span");
    blocks1.setAttribute("id", "block-juggle1");
    var size1 = Math.random() * 50 + 50;
    var border1 = Math.random() * 50;
    var color1 = Math.floor(Math.random() * color_array.length);
    blocks1.style.backgroundColor = color_array[color1];
    blocks1.style.width = size1 + "px";
    blocks1.style.height = size1 + "px";
    blocks1.style.top = innerHeight + "px";
    blocks1.style.borderRadius = border1 + "%";
    blocks1.style.left = Math.random() * innerWidth + "px";
    blocks1.addEventListener("click", function() {
        blocks1.style.backgroundColor = "rgb(0, 0 ,0, 0.0)";
        blocks1.style.width = "50px";
        blocks1.style.height = "50px";
        blocks1.style.transitionDuration = "1s";
        setTimeout(() => {
            blocks1.remove();
        }, 1000);
        check2 = true;
    });
    if (check2 == true) {
        check2 = false;
    }
    screen.appendChild(blocks1);
    setTimeout(() => {
        if (check1 == false) {
            lives--;
        }
        if (check1 == true) {
            points = points + 2;
        }
        life_span.textContent = "Left";
        score_span.textContent = points;
        blocks.remove();
    }, 8000);
    setTimeout(() => {
        if (check2 == false) {
            lives--;
        }
        if (check2 == true) {
            points = points + 2;
        }
        life_span.textContent = "Left";
        score_span.textContent = points;
        blocks1.remove();
    }, 10000);
    if (lives < 0) {
        final.classList.add("move-up");
        final_points.textContent = points;
    }
}

begin.addEventListener("click", function() {
    if (lives > 0) {
        rules.classList.remove("move-down");
        rules.classList.add("move-up");
        scoreboard.classList.add("move-down");
        score_span.style.color = "rgb(255, 255, 255)";
        life_span.style.color = "rgb(255, 255, 255)";
        setInterval(CreateBlocks, 10000);
    }
});