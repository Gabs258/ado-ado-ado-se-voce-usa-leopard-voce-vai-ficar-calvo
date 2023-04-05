function setup() {
cnv = createCanvas(280, 280);
cnv.center();
background("white");

cnv.mouseReleased(classifyCanvas);
}

function preload() {
classifier = ml5.imageClassifier('DoodleNet');


}
function gotResult(error, results) {
if (error==true) {
console.error(error);
}else{
console.log(results);
var nome = results[0].label
document.getElementById('nome').innerHTML = 'Nome :' + nome ;
}


}

function draw() {
strokeWeight(13);

stroke("black");
if (mouseIsPressed) {
line(pmouseX, pmouseY, mouseX, mouseY);

    
}

}
function classifyCanvas() {
classifier.classify(cnv, gotResult);
}