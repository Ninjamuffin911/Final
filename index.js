var clicked1 = false;


document.body.querySelector( ".lightPic").addEventListener("click", function(){
    clicked1 = !clicked1;
    if(clicked1){
        document.body.querySelector( ".lightPopUp").style.left = "100px";
    }else{
        document.body.querySelector( ".lightPopUp").style.left = "-400px";
    }
})

var clicked2 = false;

document.body.querySelector( ".mediumPic").addEventListener("click", function(){
    clicked2 = !clicked2;
    if(clicked2){
        document.body.querySelector( ".mediumPopUp").style.left = "100px";
    }else{
        document.body.querySelector( ".mediumPopUp").style.left = "-400px";
    }
})

var clicked3 = false;

document.body.querySelector( ".darkPic").addEventListener("click", function(){
    clicked3 = !clicked3;
    if(clicked3){
        document.body.querySelector( ".darkPopUp").style.left = "100px";
    }else{
        document.body.querySelector( ".darkPopUp").style.left = "-400px";
    }
})

var clicked4 = false;

document.body.querySelector( ".decafPic").addEventListener("click", function(){
    clicked4 = !clicked4;
    if(clicked4){
        document.body.querySelector( ".decafPopUp").style.left = "100px";
    }else{
        document.body.querySelector( ".decafPopUp").style.left = "-400px";
    }
})

var clicked5 = false;

document.body.querySelector( ".unroastedPic").addEventListener("click", function(){
    clicked5 = !clicked5;
    if(clicked5){
        document.body.querySelector( ".unroastedPopUp").style.left = "100px";
    }else{
        document.body.querySelector( ".unroastedPopUp").style.left = "-400px";
    }
})