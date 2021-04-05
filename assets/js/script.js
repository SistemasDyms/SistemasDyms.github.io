 $(document).ready(function()
{
  var contador = 1;

  $("#btn-menu").click(function()
  {
      if(contador == 1){
      $("#menu").animate({
        left:'0'
      });
      contador = 0;
      }else{
        contador = 1;
      $("#menu").animate({
        left:'-100%'
      });	
    }
});
});
/*
function myFunction() {
    
    var menu = document.getElementById("menu");
    var contador = 1
    if (contador == 1 ) {
      $("#menu").animate({
        left:'0'
      });
        contador = 0;
    } else {
      contador = 1;
      $("#menu").animate({
        left:'-100%'
      });
    }
}

 */
