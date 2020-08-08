function hasCollided (bullet1,wall1) 
{
  bulletRightEdge = bullet1.x - bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  else 
  {
    return false;
  }
  
}