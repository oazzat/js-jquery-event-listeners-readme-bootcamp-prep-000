function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
    return
  })
}

function frameIt(){
  $('img').on("load",function(){
    $('img').addClass("tasty")
    return
  })
}

function pressIt(){
  $('input').on("keydown",function(){
    if (key.which == 71){
      alert("You pressed G")
    }
  })
  return
}

$(document).ready(function(){

getIt()
frameIt()

});
