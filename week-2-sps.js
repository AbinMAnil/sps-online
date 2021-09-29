
let previousVideoId="";
let priviouImageId="";
let isClass=false;


function hideImg(x){
//    var frontImage= document.getElementById("image")
//     frontImage.style.visibility="hidden"
//     var vedioPlayer=document.getElementById("i-fr");
//     vedioPlayer.style.visibility="visible";

//     vedioPlayer.src+="&&autoplay=1";
   

    if(isClass){
        previousVideoId.src+="?autoplay=0";
    }
    var secondImage= document.getElementById("img-"+x);
    var vedioPlayer2=document.getElementById("viedo-"+x);
   vedioPlayer2.src+="?autoplay=1"
   vedioPlayer2.style.display="block";
   secondImage.style.display="none";
   vedioPlayer2.style.position="relative"

    previousVideoId=vedioPlayer2;
    priviouImageId=secondImage;
    isClass=true;
    }
  
  document.addEventListener("scroll",()=>{
    // var trans=document.getElementById("transform")
    var toTopButton= document.getElementById("scroll-top")
       var rootScroll=document.documentElement;
       console.log(rootScroll.scrollTop)
       if(rootScroll.scrollTop >= 300){
        toTopButton.style.display="block"
       }
       else{
        toTopButton.style.display="none";
       }
       toTopButton.addEventListener("click",()=>{
         scrollTo(0,0);
         rootScroll.style.scrollBehavior="smooth"

       })
       if(rootScroll.scrollTop>1200){
         trans.classList.add("transition-class");
       }

      

  })

