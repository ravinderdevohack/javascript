imageSrc = ["../image/img1.jpg", "../image/img2.jpg", "../image/img3.jpg", "../image/img5.jpg"];
imageAlt = ["snowflex", "candle", "candle", "book"];

console.log(imageSrc.length);
console.log(imageSrc[0]);
// console.log(imageSrc[-2]);

var nextButton = document.querySelector('.next-button');
var preButton = document.querySelector('.previous-button');
i = 1;
if (i < imageSrc.length) { 
  nextButton.addEventListener('click', (e) =>{
    i = (i >= imageSrc.length) ? imageSrc.length-1 : i; 
    // i = (i >= imageSrc.length) ? 'break;' : i; 

    var nextImage = document.querySelector('.img');
    nextImage.src = imageSrc[i];
    nextImage.alt = imageAlt[i];

    console.log(nextImage);
    // console.log()
    i++;
    console.log(i);
    

  });
  
  preButton.addEventListener('click', (e) => {
    i--;
    i = (i <= 0 )? 1 : i;
    // i = (i <= 0 )? 'break;': i;
    console.log(i);
    
    var preImage = document.querySelector('.img');
    preImage.src = imageSrc[i-1];
    preImage.alt = imageAlt[i-1];

    console.log(preImage);

  });

};