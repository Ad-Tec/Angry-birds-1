function collision(p1,p2) {
    if (p1.x-p2.x<=p1.width/2+p2.width/2 &&
      p2.x-p1.x<=p1.width/2+p2.width/2 &&
     p1.y-p2.y<=p1.height/2+p2.height/2 &&
     p2.y-p1.y<=p1.height/2+p2.height/2 ) {
  //p1.shapeColor= rgb(random(10,100),random(10,100),random(10,100));
  //p2.shapeColor= rgb(random(10,100),random(10,100),random(10,100));
  return true;
  } else {
  return false;
  //p1.shapeColor= "green";
  //p2.shapeColor="red";
  }
  }