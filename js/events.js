function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
    return
  })
}

$(document).ready(function(){

getIt()

});
