 // Top Icon smoth and
 let advOffsetTop=$("#About").offset().top
 $(window).scroll(function(){
   let currentScroll= $(window).scrollTop()
   if(currentScroll>advOffsetTop){
     $("#topBtn").fadeIn(2000)
   }
   else
   {
     $("#topBtn").fadeOut(2000)
   }
 })
 
 $("#topBtn").click(function(){
   $("body,html").animate({scrollTop: 0},1000)
 })


//  

let bgColor=["teal","#20C997","brown","orange"];
for(var i=0; i<bgColor.length; i++){
    $(".color-option li").eq(i).css("background-color",bgColor[i])
}

$(".color-option li").click(function(){
    let currentBg=$(this).css("background-color");
    $("h3,h4").css("color",currentBg)
    console.log(currentBg)
  })

  $(".color-box i").click(function(){
   let currentWidth=$(".color-option").outerWidth()
   if($(".color-box").css("left")=="0px"){
        $(".color-box").animate({"left": -currentWidth},2000)
   }
   else
   {
    $(".color-box").animate({"left": 0 },2000)
   }
  })