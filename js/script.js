var arr = [];

function calculate() {
  return math.eval(arr.join(''));
}

function display(input) {
  if (input == 'C') {
    $("#print").html("");
  }
  else if (input == '') {
    arr.pop();
    display('C');
    arr.forEach(function( curr ){
      display( curr );
    });
  }
  else if (!isNaN(input) || input == '.' || input == '%') {
    $("#print").append("<span>" + input + "</span>");
  }
  else if (input == '=') {
    $("#print").append("<br>=" + calculate());
  }
  else {
    $("#print").append("<br>" + input);
  }
  $("#print").scrollTop(5000);
}
$(document).ready(function() {
  $(".operator").on("click", "td", function() {
    var input = $(this).text();
    display(input);
    if (input == 'C') {
      arr = [];
    } else if (input == "%") {
      arr.push("*0.01");
    } else if(input != '='){
      arr.push(input);
    }
  });
});
