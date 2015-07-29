$(document).ready(function() {
console.log("hello world");


//Evercise 2
$("#secretBox").css({
  "background" : "white",
  "color" : "black"
  });

$("#secretBox").html("<h1>secret box!</h1>")

$("#row1").children().removeClass().attr("class", "box boxType3")

$("#row4").children().last().hide()

$(".boxType1").css("background", "white")

$("#row2 div:lt(2)").css("visibility", "hidden")

$(".box").not("#secretBox").css("width", "2px")


//Exercise 3
$("#container").on("click", function() {
  console.log(event.pageX, event.pageY);
});

$(".boxType1").html('<a href="www.galvanize.com">Galvanize</a>').on("click", function(event) {
    event.preventDefault();
    alert("You can never leave this page!")
});

$(".box").on("click", function() {
  $(this).append('<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzeO3os91FweSl6G5oCEfIH9ifIG84Hsq3X7gGFKkUz7RcKlMkbw" alt="Puppy">').on("click", function() {
    $("img").hide();
  });
});


$("#container").click(function(event) {
  alert(event.target);
  if($("#container").is(event.target)) {
     $("#container").css("background", "limegreen");
  } else {
    $("#container").css("background", "black");
    $(event.target).css("background", "white");
  }
});

});
