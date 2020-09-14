var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;


function setup() {
  createCanvas(800,400);

  block1= new Block(300,275,30,40);
  block2= new Block(330,275,30,40);
  block3= new Block(360,275,30,40);
  block4= new Block(390,275,30,40);
  block5= new Block(420,275,30,40);
  block6= new Block(450,275,30,40);
  block7= new Block(480,275,30,40);
  block8= new Block(510,275,30,40);

}

function draw() {
  background(255,255,255);  

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();


  drawSprites();
}