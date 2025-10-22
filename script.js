$(document).ready(function(){
  // Function to calculate GST
  function calculateGST() {
    let amount = parseFloat($("#amount").val());
    let gst = parseFloat($("#gst").val());

    if(!isNaN(amount) && !isNaN(gst)) {
      let gstValue = (amount * gst) / 100;
      let total = amount + gstValue;
      $("#actual").html("Actual Amount: " + amount.toFixed(2));
      $("#gstAmount").html("GST: " + gstValue.toFixed(2));
      $("#total").html("Total: " + total.toFixed(2));
    } else {
      $("#actual, #gstAmount, #total").html("");
    }
  }

  // keyup() → When user types in the amount box
  $("#amount").keyup(function(){
    calculateGST();
  });

  // change() → When user changes the GST %
  $("#gst").change(function(){
    calculateGST();
  });

  // click() → When reset button is clicked
  $("#reset").click(function(){
    $("#amount").val("");
    $("#gst").val("");
    $("#actual, #gstAmount, #total").html("");
  });
});
