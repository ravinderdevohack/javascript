// var nextButton = document.querySelector('.next-button');
// var preButton = document.querySelector('.previous-button');
// var nextImage1 = document.querySelector('.img1');
// var nextImage3 = document.querySelector('.img3');
// var nextImage4 = document.querySelector('.img4');
// var nextImage5 = document.querySelector('.img5');
// var nextImage9 = document.querySelector('.img9');
// var nextImage8 = document.querySelector('.img8');
// var nextImage10 = document.querySelector('.img10');


var image = document.querySelector('.image').children;
console.log(image)
var nextButton = document.querySelector('.next-button');
var preButton = document.querySelector('.previous-button');

var i = 1;
console.log(i)
if (i < image.length && i>0) {
  // var nextButton = document.querySelector('.next-button');

  nextButton.addEventListener('click', (e) => {
    var currentImage = document.querySelector('#img'+i);
    console.log(currentImage)
    i++;
    console.log(i)

    var nextImage = document.querySelector('#img'+i);
    console.log(nextImage)

    var imgHide = currentImage.style.display
    currentImage.style.display = (imgHide == 'none') ? 'block':'none';
    // console.log(imgHide)

    var imgShow = nextImage.style.display
    nextImage.style.display = (imgShow == 'block') ? 'none':'block';
    // console.log(imgShow)

  });

  preButton.addEventListener('click', (e) => {
    var currentImage = document.querySelector('#img'+i);
    console.log(currentImage)
    i--;
    console.log(i)

    var preImage = document.querySelector('#img'+i);
    console.log(preImage)

    var imgHide = currentImage.style.display
    currentImage.style.display = (imgHide == 'block') ? 'none':'block';
    // console.log(imgHide)

    var imgShow = preImage.style.display
    preImage.style.display = (imgShow == 'none') ? 'block':'none';
    // console.log(imgShow)

  });
}


