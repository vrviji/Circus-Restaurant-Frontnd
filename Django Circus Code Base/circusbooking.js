
    $(document).ready(function(){
        $("#spshowdetails").css("visibility","hidden");
        $("#showimg").css("visibility","hidden");
        $("#lblshowdetail").css("visibility","hidden");
    });
    
    // Calendar script to show only fridays and saturdays
     $('#dt1').datepicker({
        beforeShowDay: function(date){
        return [date.getDay() == 6 || date.getDay() == 5,""]
         },
        minDate: 0,       
        onSelect: function (dateString, dt1) {
                DisplayDate(dateString);
            }
    });
    function DisplayDate(message) {
       // alert(message);
        if ((message == "10/14/2022") || (message == "10/15/2022")|| (message == "10/21/2022") || (message == "10/22/2022")){
            $("#spshowdetails").html("Face First Group Performance");
            $("#showimg").attr("src","./images/FaceFirst.jpeg");
            $("#spshowdetails").css("visibility","visible");
             $("#showimg").css("visibility","visible");
             $("#lblshowdetail").css("visibility","visible");
             $("#showimglink").attr("href","https://www.facefirstcompany.com/")
        }
        else if ((message == "10/28/2022") || (message == "10/29/2022")){
            $("#spshowdetails").css("visibility","visible");
            $("#showimg").css("visibility","visible");
            $("#lblshowdetail").css("visibility","visible");
            $("#spshowdetails").html("After Clap  Group Performance");
            $("#showimg").attr("src","./images/Afterclap.jpeg");
            $("#showimglink").attr("href","https://www.companyafterclap.com/")
        }
        else if ((message == "11/04/2022") || (message == "11/05/2022")){
            $("#spshowdetails").css("visibility","visible");
            $("#showimg").css("visibility","visible");
            $("#lblshowdetail").css("visibility","visible");
            $("#spshowdetails").html("Below Zero  Group Performance");
            $("#showimg").attr("src","./images/belowzero.jpeg");
            $("#showimglink").attr("href","https://www.belowzerocompany.com/")
        }
        else{
            $("#spshowdetails").css("visibility","hidden");
            $("#showimg").css("visibility","hidden");
            $("#lblshowdetail").css("visibility","hidden");
        }
    };


    function bookcircus(){
        if($("#dt1").val() == "" || $("#tottick").val() == "" || $("#showtime").val() == "" || $("#bkname").val() == "" || $("#circusemail").val() == "" ){
            alert("Fill in required details");
        }
        else{
            window.location.href = "./circusconfirm.html";  
        }
    }