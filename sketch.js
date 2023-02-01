const density = '@#W$9876543210?!abc;:+=-,._';

let gloria;

function preload() 

{ 
  gloria = loadImage("void.png");
}

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(224, 231, 34);
  image(gloria, 0, 0, width, height);
  
  let w = width / gloria.width;
  let h = height / gloria.height;
  gloria.loadPixels();
  
  for (let i = 0; i < gloria.width; i++) {
    for (let j = 0; j < gloria.height; j++) {
      const pixelIndex = (i + j * gloria.width) * 4;
      const r = gloria.pixels[pixelIndex + 0];
      const g = gloria.pixels[pixelIndex + 1];
      const b = gloria.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(avg);
      // square(i * w, j * h, w);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,0,len));
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);

    }
  }
}
