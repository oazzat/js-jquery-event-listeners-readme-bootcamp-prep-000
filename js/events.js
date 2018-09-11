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
    if (key.which === )
  })
  return
}

$(document).ready(function(){

getIt()
frameIt()

});
