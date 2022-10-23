function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(620, 350);
    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 0, 0, 300, 300);
}
function apply() {

    if (document.getElementById("optionsForStyles").value == "futuristic") {
        document.getElementById("part1").setAttribute("class", "container headYes");
        document.getElementById("body").setAttribute("background", "background2.webp")
        document.getElementById("namelol").style = "color: aqua";
        document.getElementById("inputer").style = "color: aqua; background-color:black; border: 5px groove cyan; border-radius:15px;";
        document.getElementById("startButton").setAttribute("class", "butn");
        document.getElementById("someStatusDetected").setAttribute("class", "statuses")
        document.getElementById("givenStatusDetected").setAttribute("class", "statuses")
        document.getElementById("styler").style = "color:cyan; display: inline-block; height:50px ";
        document.getElementById("buttonApply").setAttribute("class", "butnn");
        document.getElementById("optionsForStyles").style = "background-color:black; color:aqua; border:3px solid cyan; height:32px";
    }
    else {
        document.getElementById("part1").setAttribute("class", "container btn btn-info");
        document.getElementById("body").setAttribute("background", "background1.jpg")
        document.getElementById("namelol").style = "";
        document.getElementById("inputer").style = "text-align:center;width:500px;color:black;";
        document.getElementById("startButton").setAttribute("class", "btn btn-success");
        document.getElementById("someStatusDetected").setAttribute("class", "btn btn-danger")
        document.getElementById("givenStatusDetected").setAttribute("class", "btn btn-warning")
        document.getElementById("styler").style = "display: inline-block;";
        document.getElementById("buttonApply").setAttribute("class", "btn btn-primary");
        document.getElementById("optionsForStyles").style = "height:32px";
    }
}