//Create variables here
var dog,happyDog,dogImg,happyDogImg
var foodS,foodStock
var database

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale=0.1;

 

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {
  background(46,139,87);  

  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
   }

   textSize(20);
   fill("white");
   text("Food remaining "+foodS,200,200);


  }

  function readStock(data) {
    foodS=data.val();
    }

    function writeStock(x) {
      if(x<=0){
        x=0;
      }else{
        x=x-1;
      } 

      database.ref('/').update({
        food:x
      })
      
    }



