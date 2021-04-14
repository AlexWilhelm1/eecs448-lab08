var i = 0;
var imageList = ["Kansas Fans.jpg","Jayhawk Towers.jfif","JT Hall.jpg","JT Kitchen.jpg","JT Living Room.jpg"];
function Next()
{
  i = i + 1;
  if (i == 5)
  {
    i = 0;
  }
  document.getElementById("image").src = imageList[i];
}

function Previous()
{

  i = i - 1;
  if (i == -1)
  {
    i = 4;
  }
  document.getElementById("image").src = imageList[i];
}
