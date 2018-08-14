$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var number = parseInt($("#numberInput").val());



    var total = 1;
    for (i=0; i<number; i++) {
      total = total * (number-i);
    }


  // Below function uses the recursive method

    // var factorial = function(number) {
    //   if (number<1) {return 1;}
    //   else { return number * fuctorial(number-1); }
    // }
    //
    // factorial(5);






    $("#result").text(total);

    event.preventDefault();
  });
});
