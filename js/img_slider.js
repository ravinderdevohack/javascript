imageSrc = ["../image/img1.jpg", "../image/img2.jpg", "../image/img3.jpg", "../image/img5.jpg"];

console.log(imageSrc.length);
console.log(imageSrc[0]);
console.log(imageSrc[-2]);

var nextButton = document.querySelector('.next-button');
var preButton = document.querySelector('.previous-button');
i = 1;
if (i < imageSrc.length) { 
  nextButton.addEventListener('click', (e) =>{
    i = (i >= imageSrc.length) ? 0 : i; 
    // i = (i >= imageSrc.length) ? 'break;' : i; 

    var nextImage = document.querySelector('.img');
    nextImage.src = imageSrc[i];
    console.log(nextImage);
    i++;
    console.log(i);
    

  });
  
  preButton.addEventListener('click', (e) => {
    i--;
    i = (i <= 0 )? imageSrc.length : i;
    // i = (i <= 0 )? 'break;': i;
    console.log(i);
    
    var preImage = document.querySelector('.img');
    preImage.src = imageSrc[i-1];
    console.log(preImage);

  });

};