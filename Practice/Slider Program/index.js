let imgdata = [
  "https://images.pexels.com/photos/38561256/pexels-photo-38561256.jpeg",
  "https://images.pexels.com/photos/28300438/pexels-photo-28300438.jpeg",
  "https://images.pexels.com/photos/33954000/pexels-photo-33954000.jpeg",
  "https://images.pexels.com/photos/33685536/pexels-photo-33685536.jpeg",
]

let index = 0

let slider = document.getElementById("slider");

slider.src = slider[index];

function next(){
  index++;

  if(index >= imgdata.length){
      index = 0;
  }
  
  slider.src = imgdata[index];
}

