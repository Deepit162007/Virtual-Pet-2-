//Create variables here
var database
var dog
var foodStock
var background

function preload()
{
  dog.image=loadImage("image/dogImg.png");

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);











}

foodStock=database.ref('Food');
foodStock.on("value",readStock);

function draw() {  

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock (foodS)
    dog.addImage(dogHappy);
  }

  fill(255,255,254);
  textSize(15);
    if (lastFed>=12) {
      text("Last Feed : "+lastFed%12 + "PM",350,30)
    }else if(lastFed==0){
      text("Last Feed:12 AM ",350,30);
      }else {
        text("Last Feed :" + lastFed + "AM",350,30)
      }




  food.display();
  



  drawSprites();
  

}


function readStock(data){

foodS=data.val();

}

function writeStock(x){

  if (x<=0) {
  x=0;
}else{

x=x-1

}
database.ref('/').update({
  Food:x
})

}
