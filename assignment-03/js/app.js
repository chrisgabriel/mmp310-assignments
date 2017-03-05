/*jslint browser, es6, single, for, devel, this */
/*global window */
var enlargeButton = document.getElementById('enlarge-div');
var shrinkButton = document.getElementById('shrink-div');
var mainDiv = document.getElementsByTagName('div')[0];

enlargeButton.addEventListener('click',function() {
//Whenever enlargeButton is clicked increase size of mainDiv by 100 to length and width.
    //If, after the user clicks the Enlarge button, the box becomes larger than 500 × 500, an alert modal should notify the user that the box is too large, and then not increase the width and height of the box.
    
if(mainDiv.offsetHeight<=500 && mainDiv.offsetWidth<=500){
    mainDiv.style.height=mainDiv.offsetHeight+78+'px';
    mainDiv.style.width=mainDiv.offsetWidth+78+'px';
}else{
    alert('Too large');
}
    
},false);


//Whenever shrinkButton is clicked decrease size of mainDiv by 100 to length and width.
shrinkButton.addEventListener('click',function() {
    //If, after the user click the Shrink button, the box becomes smaller than 100 × 100, an alert modal should notify the user that the box is too small, and then not decrease the width and height of the box.
if(mainDiv.offsetHeight-122>=100 && mainDiv.offsetWidth-122>=100){
    mainDiv.style.height=mainDiv.offsetHeight-122+'px';
    mainDiv.style.width=mainDiv.offsetWidth-122+'px';
}else{
    alert('Too small');
    }
    
},false);
