$(document).ready(function(){
  
    $("#carttable").css("visibility","hidden");
    $("#cartmenu").css("visibility","hidden");
    /* updated */
    $('#order').css("visibility","hidden");
    $("#cartmenu").click(function () {
        $("#carttable").css("visibility","visible");
        $("#order").css("visibility","visible");
    }); 
    
});
let  tot = 0;
function addcart(i){
    
    var ct = "#ct" + i.toString();
    var cp = "#cp" + i;
    var qty = "#qty" + i;
    var btn='#addcart' + i;
    $("#cartmenu").css("visibility","visible");
    $("#cartmenu").css("background-color","#9F2B68");
    var subtot = Number($(cp).attr("value")) * Number($(qty).val());
    tot = subtot + Number(tot);
    markup = "<tr><td>"+ $(ct).text() + "</td> <td>" + $(cp).text() + "</td> <td>" + $(qty).val() + "</td> <td>" +  subtot + "</td> </tr>"
    tableBody = $("#carttable tbody");
    tableBody.append(markup);
    $("#totprice").text(tot);
    
    $('#alert').text("ADDED")
    $("#alert").fadeIn(100).delay(1500).fadeUut(300);
    // $(btn).fadeToggle(2000);

}