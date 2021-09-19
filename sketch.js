var size = 20;

function setup(){
  var clientHeight = document.getElementById('wrapper').clientHeight;
  var clientWidth = document.getElementById('wrapper').clientWidth;
  var cnv = createCanvas(clientWidth, clientHeight, WEBGL);
  cnv.position(0,0);
  cnv.parent('principale');
  strokeWeight(size);
  strokeCap(PROJECT);
  stroke(0);
}

function draw() {
  background(255);
  var quanti = height/size;
  for(y=0;y<quanti*2;y++){
    var x = cos(2*PI)*y*quanti;
    strokeWeight(abs(sin(frameCount*0.0001*sin(y)*x))*10/size);
    line(0,x,y*quanti,0);
  }
}
