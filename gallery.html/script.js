var slider_img = document.querySelector('.slider-img');
var images = ['food1.jpg','food2.jpg','food3.jpg','food4.jpg','food6.jpg','food7.jpg','food8.jpg','food9.jpg']
var i = 0;

function prev(){
    if(i <= 0) i  = images.length;
    i--;
    return setImg();
    
}
function next() {
    if(i >= images.length -1)i = -1;
    i++;
    return setImg();
    
}

function setImg(){
    return slider_img.setAttribute('src','images/' + images[i]);
}