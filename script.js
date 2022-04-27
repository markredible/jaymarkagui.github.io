$(document).ready(function(){
  // $(window).scroll(function(){
  //   if(this.scrollY > 20){
  //     $('.navbar').addClass("sticky");
  //   }else{
  //     $('.navbar').removeClass("sticky");
  //   }
  // })
  // toggle menu/hamburger script
  $('.hamburger').click(function(){
      $('.navbar .menu').toggleClass("active")
      $('.hamburger i').toggleClass("active")
  });
})